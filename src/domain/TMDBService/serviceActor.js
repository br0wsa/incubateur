import TMDBAdapter from "../../adapters/TMDBAdapter";
import Actor from "../TMDBAggregates/useCaseActor";

class ActorService {
  static async findAll({ page = 1, sortBy = "popularity.desc", genreId } = {}) {
    const adapter = new TMDBAdapter();
    const actorsData = await adapter.getActors(
      page ?? 1,
      sortBy ?? "popularity.desc",
      genreId ?? "",
    );
    return actorsData.map((actor) => new Actor(actor));
  }
}

export default ActorService;
