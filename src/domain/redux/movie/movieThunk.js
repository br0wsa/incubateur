import { createAsyncThunk } from "@reduxjs/toolkit";
import FilmService from "./movieService";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (page) => {
    const filmService = new FilmService();
    const movies = await filmService.findAll(page);
    // to make data serializable for Redux
    const moviesJson = movies.map((movie) => {
      return {
        ...movie,
        //   knownFor: JSON.stringify(actor.knownFor),
      };
    });
    return moviesJson;
  },
);
