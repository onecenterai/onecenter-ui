import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  reviews: [],
  status: "idle",
};

export const getUsersReview = createAsyncThunk("user/get", async () => {
  try {
    const response = await axios.get("https://api.onecenter.itcentral.ng/reviews");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const GetReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.status = "completed";
    });
  },
});

export default GetReviewsSlice.reducer;
