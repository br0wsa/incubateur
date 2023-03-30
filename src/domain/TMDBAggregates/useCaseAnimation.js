class Animation {
  constructor(data) {
    if (!data) {
      throw new Error("No animation data provided");
    }
    this.id = data.id;
    this.title = data.title;
    this.overview = data.overview;
    this.releaseDate = data.release_date;
    this.posterPath = data.poster_path;
    this.backdropPath = data.backdrop_path;
    this.voteAverage = data.vote_average;
    this.voteCount = data.vote_count;
    this.genres = data.genre_ids;
    this.language = data.original_language;
    this.popularity = data.popularity;
  }
}

export default Animation;
