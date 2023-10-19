import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userDetails: {},
  loginStatus: {
    loader: false,
  },
  signupStatus: {
    status: "idle",
    loader: false,
  },
};
export const logUser = createAsyncThunk("log/user", async (credentials: {}) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
        "Bypass-Tunnel-Reminder": "Bypass-Tunnel-Reminder",
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const data = response.data;
      console.log(data);
      console.log(response);
      localStorage.setItem("data", JSON.stringify(data));

      return data;
    }
  } catch (error: any) {
    return error.response.data;
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
  } catch (error: any) {
    return error.response.data;
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
  } catch (error: any) {
    return error.response.data;
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  localStorage.removeItem("partner");
  window.location.href = window.location.origin;
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
    builder.addCase(registerUser.pending, (state: any) => {
      state.loginStatus.loader = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loginStatus.loader = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      console.log("sign up failed");
      state.loginStatus.loader = false;
    });
    builder.addCase(logOut.fulfilled, () => {
      console.log("Logged Out");
    });
  },
});

export default AuthSlice.reducer;
