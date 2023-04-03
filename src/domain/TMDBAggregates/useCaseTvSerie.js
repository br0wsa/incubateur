/**
 * @class
 * @classdesc Represents a TV show object.
 * @memberof domain/TMDBAggregates
 * @param {Object} data - The data of the TV show to store.
 * @throws {Error} Throws an exception if no data is provided for the TV show.
 * @property {number} id - The ID of the TV show.
 * @property {string} name - The name of the TV show.
 * @property {string} overview - The overview description of the TV show.
 * @property {string} releaseDate - The first air date of the TV show.
 * @property {string} posterPath - The poster path of the TV show.
 * @property {string} backdropPath - The backdrop path of the TV show.
 * @property {number} voteAverage - The average rating of the TV show.
 * @property {number} voteCount - The number of votes for the TV show.
 * @property {number[]} genres - The genre IDs of the TV show.
 * @property {string} language - The original language of the TV show.
 * @property {number} popularity - The popularity score of the TV show.
 */
class TvShows {
  constructor(data) {
    if (!data) {
      throw new Error("No TvShows data provided");
    }
    this.id = data.id;
    this.name = data.name;
    this.overview = data.overview;
    this.releaseDate = data.first_air_date;
    this.posterPath = data.poster_path;
    this.backdropPath = data.backdrop_path;
    this.voteAverage = data.vote_average;
    this.voteCount = data.vote_count;
    this.genres = data.genre_ids;
    this.language = data.original_language;
    this.popularity = data.popularity;
  }
}

export default TvShows;
