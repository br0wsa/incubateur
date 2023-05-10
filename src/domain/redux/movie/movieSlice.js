import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieThunk";
import { MOVIE_DATA_TYPE, MOVIE_LIKES } from "../action-data";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    [MOVIE_DATA_TYPE]: [],
    [MOVIE_LIKES]: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addMovieToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[MOVIE_DATA_TYPE].find((item) => item.id === id);
      if (itemToAdd) {
        state[MOVIE_LIKES].push(itemToAdd);
      }
    },
    removeMovieFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state[MOVIE_LIKES].findIndex((item) => item.id === id);
      if (index !== -1) {
        state[MOVIE_LIKES].splice(index, 1);
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

export const { addMovieToFavorites, removeMovieFromFavorites } =
  movieSlice.actions;
export default movieSlice.reducer;
