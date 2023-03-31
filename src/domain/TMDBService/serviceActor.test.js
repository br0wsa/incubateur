import ActorService from "./serviceActor.js";
import { describe, beforeEach, it, expectTypeOf, vi, expect } from "vitest";

describe("ActorService", () => {
  let ACTOR_SERVICE;

  beforeEach(() => {
    ACTOR_SERVICE = new ActorService();
  });

  it("should be an instance of ActorService", () => {
    expect(ACTOR_SERVICE).toBeInstanceOf(ActorService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(ACTOR_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(ACTOR_SERVICE, "findAll");
    await ACTOR_SERVICE.findAll(1, "popularity.desc", "");
    expect(spy).toHaveBeenCalledWith(1, "popularity.desc", "");
  });

  it("should return an array of actors", async () => {
    const actors = await ACTOR_SERVICE.findAll(1, "popularity.desc", "");
    expectTypeOf(actors).toBeObject();
  });
});
