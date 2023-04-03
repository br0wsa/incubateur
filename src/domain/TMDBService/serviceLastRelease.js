import TMDBAdapter from "../../adapters/TMDBAdapter";
import Film from "../TMDBAggregates/useCaseFilm";

/**
 * A service that finds the last film releases on TMDB based on the provided options.
 *
 * @async
 * @class
 * @memberof LastReleaseService
 */
class LastReleaseService {
  /**
   * Finds the last film releases on TMDB based on the provided options.
   *
   * @async
   * @method
   * @memberof LastReleaseService
   * @instance
   * @param {Object} [options] - The options for searching last film releases.
   * @param {number} [options.page=1] - The page number for searching last film releases.
   * @param {string} [options.sortBy="primary_release_date.desc"] - The way last film releases are sorted (by release date, etc.).
   * @param {number} [options.date=15] - The number of days to go back to look for last film releases.
   * @returns {Promise<Film[]>} A promise that resolves to an array of Film objects representing the last film releases.
   * @throws {Error} Throws an exception if the last release data is not available.
   */
  constructor() {
    this.findAll = async function ({
      page = 1,
      sortBy = "primary_release_date.desc",
      date,
    } = {}) {
      const adapter = new TMDBAdapter();
      const releasesData = await adapter.lastRelease(
        page ?? 1,
        sortBy ?? "primary_release_date.desc",
        date ?? 15,
      );
      return releasesData.map((release) => new Film(release));
    };
  }
}

export default LastReleaseService;
