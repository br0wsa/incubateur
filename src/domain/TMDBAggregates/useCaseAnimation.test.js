import data from "../../tests/__mocks__/TMDBAnimation.mock.js";
import Animation from "./useCaseAnimation.js";
import { expect, test, it } from "vitest";

test.concurrent("suite", () => {
  const DATA_ANIMATION = data;

  it("should be an instance of Animation", () => {
    const animation = new Animation(DATA_ANIMATION);
    expect(animation).toBeInstanceOf(Animation);
  });

  it("should throw an error when no data is provided", () => {
    expect(() => {
      new Animation();
    }).toThrowError("No DATA_ANIMATION provided");
  });

  it("should create an Animation instance with correct data", () => {
    const animation = new Animation(DATA_ANIMATION);
    expect(animation).toContainEqual(DATA_ANIMATION);
    expect(animation).toHaveProperty("id", DATA_ANIMATION.id);
    expect(animation).toHaveProperty("title", DATA_ANIMATION.title);
    expect(animation).toHaveProperty("overview", DATA_ANIMATION.overview);
    expect(animation).toHaveProperty(
      "releaseDate",
      DATA_ANIMATION.release_date,
    );
    expect(animation).toHaveProperty("posterPath", DATA_ANIMATION.poster_path);
    expect(animation).toHaveProperty(
      "backdropPath",
      DATA_ANIMATION.backdrop_path,
    );
    expect(animation).toHaveProperty(
      "voteAverage",
      DATA_ANIMATION.vote_average,
    );
    expect(animation).toHaveProperty("voteCount", DATA_ANIMATION.vote_count);
    expect(animation).toHaveProperty("genres", DATA_ANIMATION.genre_ids);
    expect(animation).toHaveProperty(
      "language",
      DATA_ANIMATION.original_language,
    );
    expect(animation).toHaveProperty("popularity", DATA_ANIMATION.popularity);
  });
});
