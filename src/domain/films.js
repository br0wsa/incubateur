import TMDBAdapter from "../adapters/TMDBAdapter";

class Film {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.overview = data.overview;
    this.releaseDate = data.release_date;
    this.posterPath = data.poster_path;
    this.backdropPath = data.backdrop_path;
    this.voteAverage = data.vote_average;
    this.genres = data.genres;
  }

  static async findAll({ page = 1, sortBy = "popularity.desc", genreId = null } = {}) {
    const adapter = new TMDBAdapter();
    const movies = await adapter.getMovies(page, sortBy, genreId);
    return movies.map((movie) => new Film(movie));
  }

  static async findById(id) {
    const adapter = new TMDBAdapter();
    const movie = await adapter.getMovieById(id);
    return new Film(movie);
  }
}

export default Film;
