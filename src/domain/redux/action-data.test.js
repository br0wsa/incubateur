import {
  ACTOR_DATA_TYPE,
  MOVIE_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
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
});
