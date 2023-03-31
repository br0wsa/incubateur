import SearchResultFactory from "./SearchResultFactory";
import Actor from "../TMDBAggregates/useCaseActor";
import Film from "../TMDBAggregates/useCaseFilm";
import TvShows from "../TMDBAggregates/useCaseTvSerie";
import { describe, expect, it } from "vitest";

describe("SearchResultFactory", () => {
  let searchResult;
  it("should create an Actor instance when media_type is 'person'", () => {
    searchResult = { media_type: "person" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(Actor);
  });

  it("should create a Film instance when media_type is 'movie'", () => {
    searchResult = { media_type: "movie" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(Film);
  });

  it("should create a TvShows instance when media_type is 'tv'", () => {
    const searchResult = { media_type: "tv" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(TvShows);
  });

  it("should throw an error when media_type is unknown", () => {
    searchResult = { media_type: "unknown" };
    expect(() => {
      SearchResultFactory.create(searchResult);
    }).toThrowError("Unknown media type: unknown");
  });
});
