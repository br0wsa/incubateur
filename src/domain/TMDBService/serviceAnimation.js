import TMDBAdapter from "../../adapters/TMDBAdapter";
import Animation from "../TMDBAggregates/useCaseAnimation";

class AnimationService {
  static async findAll({
    page = 1,
    sortBy = "popularity.desc",
    genreId = 16,
  } = {}) {
    const adapter = new TMDBAdapter();
    const animationsData = await adapter.getMovies(
      page ?? 1,
      sortBy ?? "popularity.desc",
      genreId ?? 16,
    );
    return animationsData.map((animation) => new Animation(animation));
  }
}

export default AnimationService;
