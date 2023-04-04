import TMDBAdapter from "../../../adapters/TMDBAdapter";
import Film from "../../TMDBAggregates/useCaseFilm";

/**
 * A service that provides methods for searching and retrieving TMDB films.
 * @class
 * @memberof FilmService
 */
class FilmService {
  /**
   * Finds all TMDB films based on the provided options.
   * @async
   * @function findAll
   * @memberof FilmService
   * @instance
   * @param {Object} [options={}] - The options for searching films.
   * @param {number} [options.page=1] - The page number for searching films.
   * @param {string} [options.sortBy="popularity.desc"] - The way films are sorted (by popularity, by name, etc.).
   * @param {number} [options.genreId] - The genre ID to filter films.
   * @returns {Promise<Film[]>} A promise that resolves to an array of Film objects.
   * @throws {Error} Throws an exception if film data is not available.
   */
  constructor() {
    this.findAll = async function ({
      page = 1,
      sortBy = "popularity.desc",
      genreId,
    } = {}) {
      const adapter = new TMDBAdapter();
      const movies = await adapter.getMovies(
        page ?? 1,
        sortBy ?? "popularity.desc",
        genreId ?? "",
      );
      console.log(movies.map((movie) => new Film(movie)));
      return movies.map((movie) => new Film(movie));
    };
  }
}

export default FilmService;
