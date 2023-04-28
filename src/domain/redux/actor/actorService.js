import TMDBAdapter from "../../../adapters/TMDBAdapter";
import Actor from "../../TMDBAggregates/useCaseActor";

/**
 * A service that provides methods for searching and retrieving TMDB actors.
 * @class
 * @memberof ActorService
 */
class ActorService {
  /**
   * Finds all TMDB actors based on the provided options.
   * @async
   * @function findAll
   * @memberof ActorService
   * @instance
   * @param {Object} [options={}] - The options for actor search (page, sortBy, genreId).
   * @param {number} [options.page=1] - The page number for actor search.
   * @param {string} [options.sortBy="popularity.desc"] - The way actors are sorted (by popularity, by name, etc.).
   * @param {number} [options.genreId] - The genre id to filter actors by.
   * @returns {Promise<Actor[]>} A promise that resolves to an array of Actor objects.
   * @throws {Error} Throws an exception if actor data is not available.
   */

  constructor() {
    this.findAll = async function ({ page, sortBy, genreId } = {}) {
      const adapter = new TMDBAdapter();
      const actorsData = await adapter.getActors(
        page ?? 1,
        sortBy ?? "popularity.desc",
        genreId ?? "",
      );
      const actors = actorsData
        .map((actor) => new Actor(actor))
        .filter((actor) => actor.name && actor.profilePath);
      return actors;
    };
  }
}

export default ActorService;
