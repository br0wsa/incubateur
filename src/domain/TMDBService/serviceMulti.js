import TMDBAdapter from "../../adapters/TMDBAdapter";
import SearchResultFactory from "../factories/SearchResultFactory";

/**
 * A service for performing multi-searches on The Movie Database (TMDb).
 *
 * @class
 * @memberof SearchMultiService
 */
class SearchMultiService {
  /**
   * Finds multi-search results on TMDb based on the provided options.
   *
   * @async
   * @instance
   * @method
   * @param {Object} options - The options for performing the multi-search (query, page, sortBy).
   * @param {string|null} options.query - The query string for the multi-search.
   * @param {number} options.page - The page number for the multi-search results.
   * @param {string} options.sortBy - The way multi-search results are sorted (popularity.asc, popularity.desc, etc.).
   * @returns {Promise<Array<SearchResult>>} A promise that resolves to an array of SearchResult objects.
   * @throws {Error} Throws an error if search data is not available.
   */
  constructor() {
    this.findAll = async function ({ query, page, sortBy } = {}) {
      const adapter = new TMDBAdapter();
      const searchesData = await adapter.search(
        query ?? "last released",
        page ?? 1,
        sortBy ?? "popularity.desc",
      );
      if (!searchesData) {
        throw new Error("Aucun résultat trouvé pour la requête.");
      }
      return searchesData.map((search) => SearchResultFactory.create(search));
    };
  }
}

export default SearchMultiService;
