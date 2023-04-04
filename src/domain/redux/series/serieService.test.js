import TvShowsService from "./serieService.js";
import { describe, beforeEach, it, expectTypeOf, vi, expect } from "vitest";

describe("TvShowsService", () => {
  let TV_SHOW_SERVICE;

  beforeEach(() => {
    TV_SHOW_SERVICE = new TvShowsService();
  });

  it("should be an instance of TvShowsService", () => {
    expect(TV_SHOW_SERVICE).toBeInstanceOf(TvShowsService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(TV_SHOW_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(TV_SHOW_SERVICE, "findAll");
    await TV_SHOW_SERVICE.findAll(1, "popularity.desc", "");
    expect(spy).toHaveBeenCalledWith(1, "popularity.desc", "");
  });

  it("should return an array of TvShowsService", async () => {
    const series = await TV_SHOW_SERVICE.findAll(1, "popularity.desc", "");
    expectTypeOf(series).toBeObject();
  });
});
