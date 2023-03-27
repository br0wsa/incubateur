import { URLSearchParams } from "url";
import ky from "ky";
import TMDBAdapterInterface from "../ports/services/TMDBAdapterInterface";

// No singleton: because we perform all UI requests with API calls.
// prefetched if redux for the first result and the result ... in advance

class TMDBAdapter extends TMDBAdapterInterface {
  constructor() {
    super();

      this._baseUrl = new URL(process.env.TMDB_URL_BASE);
      this._apiKey = process.env.TMDB_API_KEY;
      this._language = process.env.TMDB_LANGUAGE;

      Object.freeze(this);

  }

  async getMovies(page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL("/discover/movie", this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: this._language,
      page,
      sort_by: sortBy,
      with_genres: genreId
    });
    url.search = searchParams;
    const response = await ky.get(url);
    return response.json().results;
  }

  async getTVShows(page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL("/discover/tv", this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: this._language,
      page,
      sort_by: sortBy,
      with_genres: genreId
    });
    url.search = searchParams;
    const response = await ky.get(url);
    return response.json().results;
  }

  async getActors(page = 1, sortBy = "popularity.desc") {
    const url = new URL("/person/popular", this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      language: this._language,
      page,
      sort_by: sortBy,
    });
    url.search = searchParams;
    const response = await ky.get(url);
    return response.json().results;
  }

  async search(query, page = 1, sortBy = "popularity.desc", genreId = null) {
    const url = new URL("/search/multi", this._baseUrl);
    const searchParams = new URLSearchParams({
      api_key: this._apiKey,
      query,
      language: this._language,
      page,
      sort_by: sortBy,
      with_genres: genreId
    });
    url.search = searchParams;
    const response = await ky.get(url);
    return response.json().results;
  }
}

export default TMDBAdapter;
