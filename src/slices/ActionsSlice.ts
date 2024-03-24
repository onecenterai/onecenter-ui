/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ValuesProps } from "../pages/Dashboard/Actions/Actions";

const initialState = {
  actions: [],
  createActionStatus: "idle",
};

const token = localStorage.getItem("token");
export const createAction = createAsyncThunk("action/create", async (values: ValuesProps) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/endpoint`, values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      console.log("sucess");
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const getActions = createAsyncThunk("actions/get", async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/endpoints`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteAction = createAsyncThunk("action/delete", async (id: string | number) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/endpoint/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      console.log("sucessfully deleted");
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const ActionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActions.fulfilled, (state: any, action) => {
      state.actions = action.payload;
    });
    builder.addCase(createAction.fulfilled, (state: any) => {
      state.createActionStatus = "successful";
    });
    builder.addCase(createAction.pending, (state: any) => {
      state.createActionStatus = "loading";
    });
    builder.addCase(createAction.rejected, (state: any) => {
      state.createActionStatus = "failed";
    });
  },
});

export default ActionsSlice.reducer;
