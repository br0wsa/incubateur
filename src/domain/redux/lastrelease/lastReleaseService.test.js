import LastReleaseService from "./lastReleaseService.js";
import { describe, beforeEach, it, expectTypeOf, vi, expect } from "vitest";

describe("LastReleaseService", () => {
  let LAST_RELEASE_SERVICE;

  beforeEach(() => {
    LAST_RELEASE_SERVICE = new LastReleaseService();
  });

  it("should be an instance of LastReleaseService", () => {
    expect(LAST_RELEASE_SERVICE).toBeInstanceOf(LastReleaseService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(LAST_RELEASE_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(LAST_RELEASE_SERVICE, "findAll");
    await LAST_RELEASE_SERVICE.findAll(1, "primary_release_date.desc", 15);
    expect(spy).toHaveBeenCalledWith(1, "primary_release_date.desc", 15);
  });

  it("should return an array of LastReleaseService", async () => {
    const animation = await LAST_RELEASE_SERVICE.findAll(
      1,
      "primary_release_date.desc",
      15,
    );
    expectTypeOf(animation).toBeObject();
  });
});
