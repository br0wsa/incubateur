import SearchResultFactory from "./SearchResultFactory";
import Actor from "../TMDBAggregates/useCaseActor";
import Film from "../TMDBAggregates/useCaseFilm";
import TvShows from "../TMDBAggregates/useCaseTvSerie";

test("SearchResultFactory", () => {
  it("should create an Actor instance when media_type is 'person'", () => {
    const searchResult = { media_type: "person" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(Actor);
    expect(result.media_type).toBe("person");
  });

  it("should create a Film instance when media_type is 'movie'", () => {
    const searchResult = { media_type: "movie" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(Film);
    expect(result.media_type).toBe("movie");
  });

  it("should create a TvShows instance when media_type is 'tv'", () => {
    const searchResult = { media_type: "tv" };
    const result = SearchResultFactory.create(searchResult);
    expect(result).toBeInstanceOf(TvShows);
    expect(result.media_type).toBe("tv");
  });

  it("should throw an error when media_type is unknown", () => {
    const searchResult = { media_type: "unknown" };
    expect(() => {
      SearchResultFactory.create(searchResult);
    }).toThrowError("Unknown media type: unknown");
  });
});
