import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  file: "",
};
export const uploadFile = createAsyncThunk("upload/file", async (file: File) => {
  console.log(file);
  const token = localStorage.getItem("token");
  console.log(`Bearer ${token}`);
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      console.log("there was an error uploading", response.status);
    }
  } catch (error) {
    console.log("there was an error uploading", error);
    throw error;
  }
});
export const UploadSlice = createSlice({
  initialState,
  name: "upload",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadFile.fulfilled, (state, action) => {
      state.file = action.payload;
      console.log(state.file);
    });
    builder.addCase(uploadFile.rejected, () => {
      console.log("rejected");
    });
  },
});
export default UploadSlice.reducer;
