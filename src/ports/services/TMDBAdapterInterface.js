/**
 * @interface
 * @description Defines the methods required for interacting with the TMDB API.
 * @memberof ports/services
 * @property {function} getMovies - Returns a list of movies based on provided filters.
 * @property {function} getTVShows - Returns a list of TV shows based on provided filters.
 * @property {function} getActors - Returns a list of actors based on provided filters.
 * @property {function} search - Returns a list of search results based on provided query and filters.
 * @property {function} lastRelease - Returns a list of the latest releases based on provided filters.
 * @throws {Error} An error is thrown if any of the methods are not implemented.
 * @param {number} page - The page number of the results to retrieve.
 * @param {string} sortBy - The field to sort the results by.
 * @param {number} genreId - The ID of the genre to filter the results by.
 */
class TMDBAdapterInterface {
  async getMovies(page, sortBy, genreId) {
    throw new Error("Not implemented");
  }

  async getTVShows(page, sortBy, genreId) {
    throw new Error("Not implemented");
  }

  async getActors(page, sortBy) {
    throw new Error("Not implemented");
  }

  async search(query, page, sortBy, genreId) {
    throw new Error("Not implemented");
  }
  async lastRelease(query, page, sortBy, genreId) {
    throw new Error("Not implemented");
  }
}

export default TMDBAdapterInterface;
