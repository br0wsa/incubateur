import TMDBAdapter from "../../adapters/TMDBAdapter";

class Film {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.overview = data.overview;
    this.releaseDate = data.release_date;
    this.posterPath = data.poster_path;
    this.backdropPath = data.backdrop_path;
    this.voteAverage = data.vote_average;
    this.vote_count = data.vote_count;
    this.genres = data.genre_ids;
    this.language = data.original_language;
    this.popularity = data.popularity;
  }

  static async findAll({
    page = 1,
    sortBy = "popularity.desc",
    genreId = 16,
  } = {}) {
    const adapter = new TMDBAdapter();
    const animations = await adapter.getMovies(page, sortBy, genreId);
    return movies.map((animation) => new Film(animation));
  }
}

export default Film;
