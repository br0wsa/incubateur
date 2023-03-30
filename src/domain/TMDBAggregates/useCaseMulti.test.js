import data from "../../tests/__mocks__/TMDBMulti.mock.js";
import SearchMulti from "./useCaseMulti.js";
import { expect, test, it } from "vitest";

test.concurrent("suite", () => {
  const DATA_MULTI = data;
  it("should be an instance of SearchMulti", () => {
    const multi = new SearchMulti(DATA_MULTI);
    expect(multi).toBeInstanceOf(SearchMulti);
  });

  it("should throw an error when no DATA_MULTI is provided", () => {
    expect(() => {
      new SearchMulti();
    }).toThrowError("No multi data provided");
  });

  it("should create a SearchMulti instance with correct data", () => {
    const multi = new SearchMulti(DATA_MULTI);
    expect(multi).toHaveProperty("mediaType", DATA_MULTI.media_type);
  });
});
