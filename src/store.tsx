import { configureStore } from "@reduxjs/toolkit";
import WaitListSlice from "./slices/WaitListSlice";
import GetReviewsSlice from "./slices/GetReviewsSlice";

export const store = configureStore({
  reducer: {
    WaitList: WaitListSlice,
    Reviews: GetReviewsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
