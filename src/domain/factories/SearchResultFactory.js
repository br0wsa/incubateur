import Actor from "../TMDBAggregates/useCaseActor";
import Film from "../TMDBAggregates/useCaseFilm";
import TvShows from "../TMDBAggregates/useCaseTvSerie";

const PERSON = "person";
const MOVIE = "movie";
const TV = "tv";

/**
 * Create a new instance of a search result based on its media type.
 *
 * @class
 * @name SearchResultFactory.create
 * @param {Object} searchResult - The search result to create an instance of.
 * @returns {Actor|Film|TvShows} - An instance of either Actor, Film, or TvShows class.
 * @throws {Error} - Throws an error if the media type is unknown.
 */
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
