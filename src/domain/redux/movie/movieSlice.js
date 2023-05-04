import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieThunk";
import { MOVIE_DATA_TYPE } from "../action-data";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    [MOVIE_DATA_TYPE]: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addMovieToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[MOVIE_DATA_TYPE].find((item) => item.id === id);
      if (itemToAdd) {
        state.favorites.push(itemToAdd);
      }
    },
    removeMovieFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[MOVIE_DATA_TYPE] = [...state[MOVIE_DATA_TYPE], ...action.payload];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addMovieToFavorites, removeMovieFromFavorites } = movieSlice.actions;
export default movieSlice.reducer;
