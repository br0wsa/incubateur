class Actor {
  constructor(data) {
    if (!data) {
      throw new Error("No actor data provided");
    }

    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.known_for = data.known_for;
    this.popularity = data.popularity;
    this.profile_path = data.profile_path;
  }
}

export default Actor;
