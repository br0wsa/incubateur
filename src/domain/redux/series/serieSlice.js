import { createSlice } from "@reduxjs/toolkit";
import { fetchSeries } from "./serieThunk";
import { SERIE_DATA_TYPE } from "../action-data";

const serieSlice = createSlice({
  name: "serie",
  initialState: {
    [SERIE_DATA_TYPE]: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addSerieToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[SERIE_DATA_TYPE].find((item) => item.id === id);
      if (itemToAdd) {
        state.favorites.push(itemToAdd);
      }
    },
    removeSerieFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
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

export const { addSerieToFavorites, removeSerieFromFavorites } =
  serieSlice.actions;
export default serieSlice.reducer;
