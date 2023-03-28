import TMDBAdapter from "../../adapters/TMDBAdapter";

class TvShows {
  constructor(data) {
    this.id = data.id;
    this.title = data.name;
    this.overview = data.overview;
    this.releaseDate = data.first_air_date;
    this.posterPath = data.poster_path;
    this.backdropPath = data.backdrop_path;
    this.voteAverage = data.vote_average;
    this.vote_count = data.vote_count;
    this.genres = data.genre_ids;
    this.language = data.original_language;
    this.popularity = data.popularity;
  }

  static async findAll({ page = 1, sortBy = "popularity.desc", genreId } = {}) {
    const adapter = new TMDBAdapter();
    const tvShowsData = await adapter.getTVShows(
      page ?? 1,
      sortBy ?? "popularity.desc",
      genreId ?? "",
    );
    return tvShowsData.map((tvShow) => new TvShows(tvShow));
  }
}

export default TvShows;
