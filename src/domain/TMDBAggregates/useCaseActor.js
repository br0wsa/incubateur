import TMDBAdapter from "../../adapters/TMDBAdapter";

class Actor {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.knownFor = data.known_for;
    this.popularity = data.popularity;
    this.profilePath = data.profile_path;
  }

  static async findAll({ page = 1, sortBy = "popularity.desc", genreId } = {}) {
    const adapter = new TMDBAdapter();
    const actorsData = await adapter.getActors(
      page ?? 1,
      sortBy ?? "popularity.desc",
      genreId ?? "",
    );
    return actorsData.map((actor) => new Actor(actor));
  }
}

export default Actor;
