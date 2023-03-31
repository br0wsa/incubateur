import data from "../../tests/__mocks__/TMDBTvSerie.mock.js";
import TvShows from "./useCaseTvSerie.js";
import { test, it, expect } from "vitest";

test.concurrent("suite", () => {
  const DATA_TVSERIE = data;

  it("should be an instance of TvShows", () => {
    const tvshow = new TvShows(DATA_TVSERIE);
    expect(tvshow).toBeInstanceOf(TvShows);
  });

  it("should throw an error when no DATA_TVSERIE is provided", () => {
    expect(() => {
      new TvShows();
    }).toThrowError("No TvShows data provided");
  });

  it("should create an actor instance with correct data", () => {
    const tvshow = new TvShows(DATA_TVSERIE);

    expect(tvshow).toHaveProperty("id", DATA_TVSERIE.id);
    expect(tvshow).toHaveProperty("name", DATA_TVSERIE.name);
    expect(tvshow).toHaveProperty("overview", DATA_TVSERIE.overview);
    expect(tvshow).toHaveProperty("releaseDate", DATA_TVSERIE.first_air_date);
    expect(tvshow).toHaveProperty("posterPath", DATA_TVSERIE.poster_path);
    expect(tvshow).toHaveProperty("backdropPath", DATA_TVSERIE.backdrop_path);
    expect(tvshow).toHaveProperty("voteAverage", DATA_TVSERIE.vote_average);
    expect(tvshow).toHaveProperty("voteCount", DATA_TVSERIE.vote_count);
    expect(tvshow).toHaveProperty("genres", DATA_TVSERIE.genre_ids);
    expect(tvshow).toHaveProperty("language", DATA_TVSERIE.original_language);
    expect(tvshow).toHaveProperty("popularity", DATA_TVSERIE.popularity);
  });
});
