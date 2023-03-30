class SearchMulti {
  constructor(data) {
    if (!data) {
      throw new Error("No multi data provided");
    }
    this.mediaType = data.media_type;
  }
}

export default SearchMulti;
