import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  partners: [],
  partner: [],
  patchPartnerStatus: "idle",
};

const token = localStorage.getItem("token");

export const getPartners = createAsyncThunk("partners/get", async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/partners`, {
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
export const getPartner = createAsyncThunk("partner/get", async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/partner/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("partner", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const patchPartner = createAsyncThunk("partner/patch", async (values) => {
  const id = JSON.parse(localStorage.getItem("partner")).id;
  const token = localStorage.getItem("token");

  console.log(id);
  try {
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/partner/${id}`, values, {
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

export const PartnerSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    patchPartnerIdle: (state) => {
      state.patchPartnerStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPartner.fulfilled, (state: any, action) => {
      state.partner = action.payload;
    });
    builder.addCase(getPartners.fulfilled, (state: any, action) => {
      state.partners = action.payload;
    });
    builder.addCase(patchPartner.fulfilled, (state: any) => {
      state.patchPartnerStatus = "successful";
    });
    builder.addCase(patchPartner.pending, (state: any) => {
      state.patchPartnerStatus = "loading";
    });
    builder.addCase(patchPartner.rejected, (state: any) => {
      state.patchPartnerStatus = "failed";
    });
  },
});

export const { patchPartnerIdle } = PartnerSlice.actions;
export default PartnerSlice.reducer;
