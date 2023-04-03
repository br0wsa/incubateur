/**
 * @class
 * @classdesc Represents a multi-category search object.
 * @memberof domain/TMDBAggregates
 * @param {Object} data - The multi-category search data to store.
 * @throws {Error} Throws an exception if no data is provided for the multi-category search.
 * @property {string} mediaType - The media type of the multi-category search (movie, tv series, actor, etc.).
 */

class SearchMulti {
  constructor(data) {
    if (!data) {
      throw new Error("No multi data provided");
    }
    this.mediaType = data.media_type;
  }
}

export default SearchMulti;
