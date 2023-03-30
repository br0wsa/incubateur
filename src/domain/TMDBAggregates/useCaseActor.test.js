import data from "../../tests/__mocks__/TMDBActor.mock.js";
import Actor from "./useCaseActor";
import { expect, test, it } from "vitest";

test.concurrent("suite", () => {
  const DATA_ACTOR = data;

  it("should be an instance of Actor", () => {
    const actor = new Actor(DATA_ACTOR);
    expect(actor).toBeInstanceOf(Actor);
  });

  it("should throw an error when no DATA_ACTOR is provided", () => {
    expect(() => {
      new Actor();
    }).toThrowError("No actor data provided");
  });

  it("should create an actor instance with correct data", () => {
    const actor = new Actor(DATA_ACTOR);
    expect(actor).toBeInstanceOf(Actor);
    expect(actor).toContainEqual(DATA_ACTOR);
    expect(actor).toHaveProperty("id", DATA_ACTOR.id);
    expect(actor).toHaveProperty("name", DATA_ACTOR.name);
    expect(actor).toHaveProperty("gender", DATA_ACTOR.gender);
    expect(actor).toHaveProperty("knownFor", DATA_ACTOR.known_for);
    expect(actor).toHaveProperty("popularity", DATA_ACTOR.popularity);
    expect(actor).toHaveProperty("profilePath", DATA_ACTOR.profile_path);
  });
});
