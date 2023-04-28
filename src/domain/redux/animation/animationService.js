import TMDBAdapter from "../../../adapters/TMDBAdapter";
import Animation from "../../TMDBAggregates/useCaseAnimation";

/**
 * A service that provides methods for searching and retrieving TMDB animations.
 * @class
 * @memberof AnimationService
 */
class AnimationService {
  /**
   * Finds all TMDB animations based on the provided options.
   * @async
   * @function findAll
   * @memberof AnimationService
   * @instance
   * @param {Object} [options={}] - The options for animation search (page, sortBy, genreId).
   * @param {number} [options.page=1] - The page number for animation search.
   * @param {string} [options.sortBy="popularity.desc"] - The way animations are sorted (by popularity, by name, etc.).
   * @param {number} [options.genreId=16] - The genre id to filter animations by.
   * @returns {Promise<Animation[]>} A promise that resolves to an array of Animation objects.
   * @throws {Error} Throws an exception if animation data is not available.
   */
  constructor() {
    this.findAll = async function ({ page, sortBy, genreId = 16 } = {}) {
      const adapter = new TMDBAdapter();
      const animationsData = await adapter.getMovies(
        page ?? 1,
        sortBy ?? "popularity.desc",
        genreId ?? 16,
      );
      return animationsData
        .map((animation) => new Animation(animation))
        .filter((animation) => animation.title && animation.posterPath);
    };
  }
}

export default AnimationService;
