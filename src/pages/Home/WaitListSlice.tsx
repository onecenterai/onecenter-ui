import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BinarytoAudio from "../../utilities/BinarytoAudio";
const initialState = {
  userId: [],
  reviews: [],
  micStatus: false,
  callerComponent: false,

  status: "idle",
  error: null,
};
export const getUsersReview = createAsyncThunk("user/get", async () => {
  try {
    const response = await axios.get("https://api.onecenter.itcentral.ng/reviews");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const postUserData = createAsyncThunk("user/post", async (values: object, { dispatch }) => {
  dispatch(setCallerComponent());
  let ringer = new Audio("./audio/ringer.mp3");
  ringer.loop = true;
  ringer.play();
  try {
    const response = await axios.post("https://api.onecenter.itcentral.ng/review", values, {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "arraybuffer",
    });

    if (response.status >= 200 && response.status < 300) {
      ringer.pause();
      const id = response.headers["review-id"];
      if (!id) {
        dispatch(setCallerComponent());
      }
      BinarytoAudio(response.data, () => {
        dispatch(setMicStatus());
        setTimeout(() => {
          dispatch(resetMicStatus());
        }, 10000);
      });

      return id;
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const postUserReview = createAsyncThunk("review/patch", async (audioFile: Blob, thunkAPI: any) => {
  const id = thunkAPI.getState().WaitList.userId;
  try {
    const formData = new FormData();
    console.log(audioFile);
    formData.append("speech", audioFile, id + ".mp3");
    const response = await axios.patch(`https://api.onecenter.itcentral.ng/review/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "arraybuffer",
    });
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      BinarytoAudio(response.data);
      thunkAPI.dispatch(setCallerComponent());
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const WaitListSlice = createSlice({
  name: "WaitList",
  initialState,
  reducers: {
    setMicStatus: (state) => {
      state.micStatus = true;
    },
    resetMicStatus: (state) => {
      state.micStatus = false;
    },
    setCallerComponent: (state) => {
      state.callerComponent = !state.callerComponent;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserData.fulfilled, (state, action) => {
      state.userId = action.payload;
      state.status = "success";
      console.log(state.userId);
    });
    builder.addCase(getUsersReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});
export const { setMicStatus, resetMicStatus, setCallerComponent } = WaitListSlice.actions;
export default WaitListSlice.reducer;
