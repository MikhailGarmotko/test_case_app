import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type stateFeedBack = {
  data: { name: string; email: string; message: string };
  pending: boolean;
  error: boolean;
};

const initialState: stateFeedBack = {
  data: { name: "", email: "", message: "" },
  pending: false,
  error: false,
};

const url = "users/create";

export const postFeedBack = createAsyncThunk(
  "feedBackList/feedBackPost",
  async (data: any) => {
    const response = await axios.post(url, data);
    return response.data;
  }
);

export const feedBackSlice = createSlice({
  name: "feedBackList",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFeedBack.pending, (state) => {
        state.pending = true;
      })
      .addCase(postFeedBack.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(postFeedBack.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectFeedBack = (state: RootState) => state.feedBackPost;

export default feedBackSlice.reducer;
