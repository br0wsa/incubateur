import TMDBAdapter from "../../adapters/TMDBAdapter";
import SearchResultFactory from "../factories/SearchResultFactory";

class SearchMulti {
  constructor(data) {
    this.mediaType = data.media_type;
  }

  static async findAll({
    query = null,
    page = 1,
    sortBy = "popularity.desc",
  } = {}) {
    const adapter = new TMDBAdapter();
    const searchesData = await adapter.search(
      query ?? "",
      page ?? 1,
      sortBy ?? "popularity.desc",
    );
    return searchesData.map((search) => SearchResultFactory.create(search));
  }
}

export default SearchMulti;
