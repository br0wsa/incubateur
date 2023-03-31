import TMDBAdapter from "../../adapters/TMDBAdapter";
import TvShows from "../TMDBAggregates/useCaseTvSerie";

class TvShowsService {
  constructor() {
    this.findAll = async function ({
      page = 1,
      sortBy = "popularity.desc",
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
