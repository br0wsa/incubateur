import TMDBAdapter from "../../../adapters/TMDBAdapter";
import TvShows from "../../TMDBAggregates/useCaseTvSerie";

/**
 * A service for performing TvShowsService on The Movie Database (TMDb).
 *
 * @class
 * @memberof TvShowsService
 */
class TvShowsService {
  /**
   * Finds all TV shows on TMDb based on the provided options.
   *
   * @async
   * @function
   * @instance
   * @memberof TvShowsService
   * @param {Object} options - The options for searching TV shows (page, sort, genre id).
   * @param {number} options.page - The page number for searching TV shows.
   * @param {string} options.sortBy - The way TV shows are sorted (by popularity, by name, etc.).
   * @param {number} options.genreId - The genre ID to filter TV shows.
   * @returns {Promise<TvShows[]>} A promise that resolves to an array of `TvShows` objects.
   * @throws {Error} Throws an exception if TV show data is not available.
   */
  constructor() {
    this.findAll = async function ({
      page,
      sortBy,
      genreId,
    } = {}) {
      const adapter = new TMDBAdapter();
      const tvShowsData = await adapter.getTVShows(
        page ?? 1,
        sortBy ?? "popularity.desc",
        genreId ?? "",
      );
      return tvShowsData.map((tvShow) => new TvShows(tvShow));
    };
  }
}

export default TvShowsService;
