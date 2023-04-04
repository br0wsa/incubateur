import { createSlice } from "@reduxjs/toolkit";
import { fetchlastReleases } from "./lastReleaseThunk";

const lastReleaseSlice = createSlice({
  name: "lastRealease",
  initialState: {
    lastRealeases: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlastReleases.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchlastReleases.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lastRealeases = action.payload;
      })
      .addCase(fetchlastReleases.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default lastReleaseSlice.reducer;
