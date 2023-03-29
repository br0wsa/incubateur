class Actor {
  constructor(data) {
    if (!data) {
      throw new Error("No actor data provided");
    }

    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.knownFor = data.known_for;
    this.popularity = data.popularity;
    this.profilePath = data.profile_path;
  }
}

export default Actor;
