import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  agents: [],
  createAgentStatus: "idle",
};

const token = localStorage.getItem("token");
export const createAgent = createAsyncThunk("agent/create", async (values: {}) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/agent`, values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const getAgents = createAsyncThunk("agents/get", async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/agents`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("resources", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteAgent = createAsyncThunk("agent/delete", async (id: string | number) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/agent/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

export const AgentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAgents.fulfilled, (state: any, action) => {
      state.agents = action.payload;
    });
    builder.addCase(createAgent.fulfilled, (state: any) => {
      state.createAgentStatus = "successful";
    });
    builder.addCase(createAgent.pending, (state: any) => {
      state.createAgentStatus = "loading";
    });
    builder.addCase(createAgent.rejected, (state: any) => {
      state.createAgentStatus = "failed";
    });
  },
});

export default AgentsSlice.reducer;
