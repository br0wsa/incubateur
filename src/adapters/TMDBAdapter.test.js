import TMDBAdapter from "./TMDBAdapter";
import { describe, beforeEach, it, expect, expectTypeOf } from "vitest";

describe("TMDBAdapter", () => {
  let tmdbAdapter;

  beforeEach(() => {
    tmdbAdapter = new TMDBAdapter();
  });

  describe("Method existence", () => {
    it("should have a getMovies method", () => {
      expect(tmdbAdapter.getMovies).toBeDefined();
      expectTypeOf(tmdbAdapter.getMovies).toBeFunction();
    });

    it("should have a getTVShows method", () => {
      expect(tmdbAdapter.getTVShows).toBeDefined();
      expectTypeOf(tmdbAdapter.getTVShows).toBeFunction();
    });

    it("should have a getActors method", () => {
      expect(tmdbAdapter.getActors).toBeDefined();
      expectTypeOf(tmdbAdapter.getActors).toBeFunction();
    });

    it("should have a search method", () => {
      expect(tmdbAdapter.search).toBeDefined();
      expectTypeOf(tmdbAdapter.search).toBeFunction();
    });

    it("should have a lastRelease method", () => {
      expect(tmdbAdapter.lastRelease).toBeDefined();
      expectTypeOf(tmdbAdapter.lastRelease).toBeFunction();
    });
  });
});
