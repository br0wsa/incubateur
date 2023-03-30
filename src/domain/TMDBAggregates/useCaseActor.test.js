import data from "../../tests/__mocks__/TMDBActor.mock.js";
import Actor from "./useCaseActor";

describe.concurrent("suite", () => {
  const DATA_ACTOR = data;

  test("should be an instance of Actor", () => {
    const actor = new Actor(DATA_ACTOR);
    expect(actor).toBeInstanceOf(Actor);
  });

  test("should throw an error when no DATA_ACTOR is provided", () => {
    expect(() => {
      new Actor();
    }).toThrowError("No actor data provided");
  });

  test("should create an actor instance with correct data", () => {
    const actor = new Actor(DATA_ACTOR);
    expect(actor).toBeInstanceOf(Actor);
    expect(actor).toHaveProperty("id", DATA_ACTOR.id);
    expect(actor).toHaveProperty("name", DATA_ACTOR.name);
    expect(actor).toHaveProperty("gender", DATA_ACTOR.gender);
    expect(actor).toHaveProperty("known_for", DATA_ACTOR.known_for);
    expect(actor).toHaveProperty("popularity", DATA_ACTOR.popularity);
    expect(actor).toHaveProperty("profile_path", DATA_ACTOR.profile_path);
  });
});
