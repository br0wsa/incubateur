/**
 * @class
 * @classdesc This class represents an Animation.
 * @memberof domain/TMDBAggregates
 * @param {Object} data - The animation data.
 * @param {number} data.id - The ID of the animation.
 * @param {string} data.title - The title of the animation.
 * @param {string} data.overview - The overview of the animation.
 * @param {string} data.release_date - The release date of the animation.
 * @param {string} data.poster_path - The poster path of the animation.
 * @param {string} data.backdrop_path - The backdrop path of the animation.
 * @param {number} data.vote_average - The vote average of the animation.
 * @param {number} data.vote_count - The vote count of the animation.
 * @param {Array.<number>} data.genre_ids - The genre IDs of the animation.
 * @param {string} data.original_language - The original language of the animation.
 * @param {number} data.popularity - The popularity of the animation.
 */

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
