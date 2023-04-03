/**
 * Represents a film.
 * @class
 * @classdesc This class represents a Film.
 * @memberof domain/TMDBAggregates
 * @param {Object} data - The film data.
 * @param {number} data.id - The ID of the film.
 * @param {string} data.title - The title of the film.
 * @param {string} data.overview - The overview of the film.
 * @param {string} data.release_date - The release date of the film.
 * @param {string} data.poster_path - The poster path of the film.
 * @param {string} data.backdrop_path - The backdrop path of the film.
 * @param {number} data.vote_average - The vote average of the film.
 * @param {number} data.vote_count - The vote count of the film.
 * @param {Array} data.genre_ids - The genre IDs of the film.
 * @param {string} data.original_language - The original language of the film.
 * @param {number} data.popularity - The popularity of the film.
 */

class Film {
  constructor(data) {
    if (!data) {
      throw new Error("No film data provided");
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

export default Film;
