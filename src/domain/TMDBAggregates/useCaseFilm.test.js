import data from "../../tests/__mocks__/TMDBFilm.mock.js";
import Film from "./useCaseFilm";
import { test, it, expect } from "vitest";

test.concurrent("suite", () => {
  const DATA_FILM = data;

  it("should be an instance of Film", () => {
    const film = new Film(DATA_FILM);
    expect(film).toBeInstanceOf(Film);
  });

  it("should throw an error when no DATA_FILM is provided", () => {
    expect(() => new Film()).toThrowError("No film data provided");
  });

  it("should create a Film instance with correct data", () => {
    const film = new Film(DATA_FILM);
    expect(film).toHaveProperty("id", DATA_FILM.id);
    expect(film).toHaveProperty("title", DATA_FILM.title);
    expect(film).toHaveProperty("overview", DATA_FILM.overview);
    expect(film).toHaveProperty("releaseDate", DATA_FILM.release_date);
    expect(film).toHaveProperty("posterPath", DATA_FILM.poster_path);
    expect(film).toHaveProperty("backdropPath", DATA_FILM.backdrop_path);
    expect(film).toHaveProperty("voteAverage", DATA_FILM.vote_average);
    expect(film).toHaveProperty("voteCount", DATA_FILM.vote_count);
    expect(film).toHaveProperty("genres", DATA_FILM.genre_ids);
    expect(film).toHaveProperty("language", DATA_FILM.original_language);
    expect(film).toHaveProperty("popularity", DATA_FILM.popularity);
  });
});
