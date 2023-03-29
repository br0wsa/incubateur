import TMDBAdapter from "../../adapters/TMDBAdapter";
import Film from "../TMDBAggregates/useCaseFilm";

class LastReleaseService {
  static async findAll({
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
  }
}

export default LastReleaseService;
