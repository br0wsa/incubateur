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
  }

  export default TMDBAdapterInterface;
