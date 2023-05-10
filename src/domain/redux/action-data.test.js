import {
  ACTOR_DATA_TYPE,
  MOVIE_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
  LAST_LIKES,
  ACTOR_LIKES,
  ANIMATION_LIKES,
  SERIE_LIKES,
  MOVIE_LIKES,
} from "./action-data";

describe("Data types", () => {
  it("ACTOR_DATA_TYPE should equal 'actors'", () => {
    expect(ACTOR_DATA_TYPE).toEqual("actors");
  });
  it("MOVIE_DATA_TYPE should equal 'movies'", () => {
    expect(MOVIE_DATA_TYPE).toEqual("movies");
  });
  it("SERIE_DATA_TYPE should equal 'series'", () => {
    expect(SERIE_DATA_TYPE).toEqual("series");
  });
  it("LAST_RELEASE_DATA_TYPE should equal 'lastReleases'", () => {
    expect(LAST_RELEASE_DATA_TYPE).toEqual("lastReleases");
  });
  it("ANIMATION_DATA_TYPE should equal 'animations'", () => {
    expect(ANIMATION_DATA_TYPE).toEqual("animations");
  });
  it("ANIMATION_DATA_TYPE should equal 'animations'", () => {
    expect(ANIMATION_DATA_TYPE).toEqual("animations");
  });
  it("LAST_LIKES should equal 'likedLastReleases'", () => {
    expect(LAST_LIKES).toEqual("likedLastReleases");
  });
  it("ACTOR_LIKES should equal 'likedactors'", () => {
    expect(ACTOR_LIKES).toEqual("likedactors");
  });
  it("ANIMATION_LIKES should equal 'likedAnimations'", () => {
    expect(ANIMATION_LIKES).toEqual("likedAnimations");
  });
  it("SERIE_LIKES should equal 'likedSeries'", () => {
    expect(SERIE_LIKES).toEqual("likedSeries");
  });
  it("MOVIE_LIKES should equal 'likedMovies'", () => {
    expect(MOVIE_LIKES).toEqual("likedMovies");
  });
});
