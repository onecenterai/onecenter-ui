import { configureStore } from "@reduxjs/toolkit";
import WaitListSlice from "./pages/Home/WaitListSlice";

export const store = configureStore({
  reducer: {
    WaitList: WaitListSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
