import Actor from "../TMDBAggregates/useCaseActor";
import Film from "../TMDBAggregates/useCaseFilm";
import TvShows from "../TMDBAggregates/useCaseTvSerie";

const PERSON = "person";
const MOVIE = "movie";
const TV = "tv";

class SearchResultFactory {
  static create(searchResult) {
    switch (searchResult.media_type) {
      case PERSON:
        return new Actor(searchResult);
      case MOVIE:
        return new Film(searchResult);
      case TV:
        return new TvShows(searchResult);
      default:
        throw new Error(`Unknown media type: ${searchResult.media_type}`);
    }
  }
}

export default SearchResultFactory;
