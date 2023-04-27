import { createSlice } from "@reduxjs/toolkit";
import { fetchSeries } from "./serieThunk";
import { SERIE_DATA_TYPE } from "../action-data";

const serieSlice = createSlice({
  name: "serie",
  initialState: {
    [SERIE_DATA_TYPE]: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[SERIE_DATA_TYPE] = [...state[SERIE_DATA_TYPE], ...action.payload];
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default serieSlice.reducer;
