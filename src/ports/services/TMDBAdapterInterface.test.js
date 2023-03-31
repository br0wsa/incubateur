import TMDBAdapterInterface from "./TMDBAdapterInterface";
import { describe, expect, it, vi } from "vitest";

describe("TMDBAdapterInterface", () => {
  vi.mock("./TMDBAdapterInterface", async () => {
    const actual = await vi.importActual("./TMDBAdapterInterface");
    return {
      ...actual,
      getMovies: vi.fn(),
      getTVShows: vi.fn(),
      getActors: vi.fn(),
      search: vi.fn(),
      lastRelease: vi.fn(),
    };
  });

  it("should be an instance of TMDBAdapterInterface", () => {
    const tmdbAdapter = new TMDBAdapterInterface();
    expect(tmdbAdapter).toBeInstanceOf(TMDBAdapterInterface);
  });
});
