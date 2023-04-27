import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieThunk";
import { MOVIE_DATA_TYPE } from "../action-data";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    [MOVIE_DATA_TYPE]: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[MOVIE_DATA_TYPE] = [
          ...state[MOVIE_DATA_TYPE],
          ...action.payload,
        ];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
