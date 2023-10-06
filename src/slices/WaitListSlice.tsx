import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BinarytoAudio from "../utilities/BinarytoAudio";

const initialState = {
  userId: [],
  callerComponent: false,
  callStatus: "red",
  startMic: false,
  status: "idle",
  error: null,
};
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
      dispatch(connected());
      BinarytoAudio(response.data, () => {
        dispatch(micToggle(true));
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

      thunkAPI.dispatch(connected());
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
    setCallerComponent: (state) => {
      state.callerComponent = !state.callerComponent;
    },
    connected: (state) => {
      state.callStatus = "green";
    },
    micToggle: (state, action) => {
      state.startMic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserData.fulfilled, (state, action) => {
      state.userId = action.payload;
      state.status = "success";
      console.log(state.userId);
    });
  },
});
export const { setCallerComponent, connected, micToggle } = WaitListSlice.actions;
export default WaitListSlice.reducer;
