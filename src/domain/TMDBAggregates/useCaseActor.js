/**
 * @class
 * @classdesc This class represents an Actor.
 * @memberof domain/TMDBAggregates
 * @param {Object} data - The actor data.
 * @param {number} data.id - The ID of the actor.
 * @param {string} data.name - The name of the actor.
 * @param {string} data.gender - The gender of the actor.
 * @param {Array} data.known_for - An array of movies the actor is known for.
 * @param {number} data.popularity - The popularity of the actor.
 * @param {string} data.profile_path - The profile path of the actor.
 * @throws {Error} If no actor data is provided.
 */

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
