import ky from "ky";
import TMDBAdapterInterface from "../ports/services/TMDBAdapterInterface";

// No singleton: because we perform all UI requests with API calls.
// prefetched if redux for the first result and the result ... in advance

/**
 * An adapter to interact with The Movie Database API.
 * @extends TMDBAdapterInterface
 */
class TMDBAdapter extends TMDBAdapterInterface {
  /**
   * Create a new instance of TMDBAdapter.
   */
  constructor() {
    super();
    /**
     * The version of the API.
     * @private
     */
    this._version = "3";
    /**
     * The API key to use for authentication.
     * @private
     */
    this._apiKey = "836c908c992e085a541e9c67774163c7";
    /**
     * The base URL for The Movie Database API.
     * @private
     */
    this._baseUrlTMDB = new URL("https://api.themoviedb.org/");
  }

  /**
   * Get a list of now playing movies.
   * @async
   * @param {number} [page=1] - The page number to get.
   * @param {string} [sortBy="popularity.desc"] - The sort order to use.
   * @param {number|null} [genreId=null] - The genre ID to filter by.
   * @returns {Promise<Array<object>>} - A list of movie objects.
   */
  async getMovies(page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL(
      `${this._version}/movie/now_playing`,
      this._baseUrlTMDB,
    );
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
      with_genres: genreId,
    });
    url.search = searchParams;
    const response = await ky.get(url.toString()).json();
    return response.results;
  }

  /**
   * Get a list of popular TV shows.
   * @async
   * @param {number} [page=1] - The page number to get.
   * @param {string} [sortBy="popularity.desc"] - The sort order to use.
   * @param {number|null} [genreId=null] - The genre ID to filter by.
   * @returns {Promise<Array<object>>} - A list of TV show objects.
   */
  async getTVShows(page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL(`${this._version}/tv/popular`, this._baseUrlTMDB);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
      with_genres: genreId,
    });
    url.search = searchParams;
    const response = await ky.get(url.toString()).json();
    return response.results;
  }

  /**
   * Get a list of popular actors.
   * @async
   * @param {number} [page=1] - The page number to get.
   * @param {string} [sortBy="popularity.desc"] - The sort order to use.
   * @returns {Promise<Array<object>>} - A list of actor objects.
   */
  async getActors(page = 1, sortBy = "popularity.desc") {
    const url = new URL(`${this._version}/person/popular`, this._baseUrlTMDB);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
    });
    url.search = searchParams;
    const response = await ky.get(url.toString()).json();
    return response.results;
  }

  /**
   * Search for movies, TV shows, and people.
   * @async
   * @param {string} query - The search query.
   * @param {number} [page=1] - The page number to get.
   * @param {string} [sortBy="popularity.desc"] - The sort order to use.
   * @returns {Promise<Array<object>>} - A list of search result objects.
   */
  async search(query, page = 1, sortBy = "popularity.desc") {
    const url = new URL(`${this._version}/search/multi`, this._baseUrlTMDB);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      query,
      language: "fr-EU",
      page,
      sort_by: sortBy,
    });
    url.search = searchParams;
    const response = await ky.get(url.toString()).json();
    return response.results;
  }

  /**
   * Get a list of movies released in the last number of days.
   * @async
   * @param {number} [page=1] - The page number to get.
   * @param {string} [sortBy="primary_release_date.desc"] - The sort order to use.
   * @param {number} [days=15] - The number of days to look back for releases.
   * @returns {Promise<Array<object>>} - A list of search result objects.
   */
  async lastRelease(page = 1, sortBy = "primary_release_date.desc", days = 15) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    const formattedDate = date.toISOString().split("T")[0];
    const url = new URL(`${this._version}/discover/movie`, this._baseUrlTMDB);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
      include_adult: false,
      include_video: false,
      primary_release_date_gte: formattedDate,
    });
    url.search = searchParams;
    console.log(url.toString());
    const response = await ky.get(url.toString()).json();
    return response.results;
  }
}

export default TMDBAdapter;
