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

const url = "http://localhost:3000/users/create";

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
    // leave this empty here
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere, including actions generated by createAsyncThunk or in other slices.
  // Since this is an API call we have 3 possible outcomes: pending, fulfilled and rejected. We have made allocations for all 3 outcomes.
  // Doing this is good practice as we can tap into the status of the API call and give our users an idea of what's happening in the background.
  extraReducers: (builder) => {
    builder
      .addCase(postFeedBack.pending, (state) => {
        state.pending = true;
      })
      .addCase(postFeedBack.fulfilled, (state, { payload }) => {
        // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
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
