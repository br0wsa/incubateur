import { createSlice } from "@reduxjs/toolkit";
import { fetchlastReleases } from "./lastReleaseThunk";
import { LAST_RELEASE_DATA_TYPE } from "../action-data";

const lastReleaseSlice = createSlice({
  name: "lastRelease",
  initialState: {
    [LAST_RELEASE_DATA_TYPE]: [],
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
        state[LAST_RELEASE_DATA_TYPE] = action.payload;
      })
      .addCase(fetchlastReleases.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default lastReleaseSlice.reducer;
