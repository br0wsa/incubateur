import data from "../../tests/__mocks__/TMDBActor.mock.js";
import Actor from "./useCaseActor";
import { test, expect, it } from "vitest";

test("Actor", () => {
  it("should create an actor instance with correct data", () => {
    const actor = new Actor(data);
    expect(actor.id).toBe(data.id);
    expect(actor.name).toBe(data.name);
    expect(actor.gender).toBe(data.gender);
    expect(actor.knownFor).toBe(data.known_for);
    expect(actor.popularity).toBe(data.popularity);
    expect(actor.profilePath).toBe(data.profile_path);
  });
});
