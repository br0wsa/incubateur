import ky from "ky";
import TMDBAdapterInterface from "../ports/services/TMDBAdapterInterface";

// No singleton: because we perform all UI requests with API calls.
// prefetched if redux for the first result and the result ... in advance

class TMDBAdapter extends TMDBAdapterInterface {
  constructor() {
    super();
    // APIKEY doit être fetch au serveur et non visible en front
    this._version = 3;
    this._apiKey = "836c908c992e085a541e9c67774163c7";
    this._baseUrlTMDB = new URL("https://api.themoviedb.org/");

    Object.freeze(this);
  }

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

  async getTVShows(page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL(`${this._version}/discover/tv`, this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
      with_genres: genreId,
    });
    url.search = searchParams;
    const response = await ky.get(url).json();
    return response.results;
  }

  async getActors(page = 1, sortBy = "popularity.desc") {
    const url = new URL(`${this._version}/person/popular`, this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: "fr-EU",
      page,
      sort_by: sortBy,
    });
    url.search = searchParams;
    const response = await ky.get(url).json();
    return response.results;
  }

  async search(query, page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL(`${this._version}/search/multi`, this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      query,
      language: "fr-EU",
      page,
      sort_by: sortBy,
      with_genres: genreId,
    });
    url.search = searchParams;
    const response = await ky.get(url).json();
    return response.results;
  }
}

export default TMDBAdapter;
