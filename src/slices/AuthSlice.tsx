import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userDetails: {},
  loginStatus: {
    status: "idle",
    loader: false,
  },
};
export const logUser = createAsyncThunk("log/user", async (credentials: {}) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const data = response.data;
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      sessionStorage.setItem("token", data.token);
      console.log(data.token);

      return data;
    }
  } catch (error) {
    console.log("Error while trying to login: ", error);
    throw error;
  }
});
export const registerPartner = createAsyncThunk("register/user", async (credentials: {}) => {
  console.log(credentials);
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/partner`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 200 && response.status < 300) {
      console.log("successful", response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Error while trying to register: ", error);
    throw error;
  }
});
export const registerUser = createAsyncThunk("register/user", async (credentials: {}) => {
  console.log(credentials);
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 200 && response.status < 300) {
      console.log("successful", response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Error while trying to login: ", error);
    throw error;
  }
});
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logUser.pending, (state: any) => {
      state.loginStatus.status = "pending";
      state.loginStatus.loader = true;
    });
    builder.addCase(logUser.fulfilled, (state: any, action) => {
      state.userDetails = action.payload;
      state.loginStatus.status = "success";
      state.loginStatus.loader = false;
    });
    builder.addCase(logUser.rejected, (state: any) => {
      state.userDetails = {};
      state.loginStatus.status = "failed";
      state.loginStatus.loader = false;
      console.log("error, possibly, does not exist");
    });
    builder.addCase(registerUser.fulfilled, () => {
      console.log("sign up completed");
    });
    builder.addCase(registerUser.rejected, () => {
      console.log("sign up failed");
    });
  },
});

export default AuthSlice.reducer;
