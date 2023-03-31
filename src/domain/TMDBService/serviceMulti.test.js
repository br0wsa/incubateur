import SearchMultiService from "./serviceMulti.js";

describe("SearchMultiService", () => {
  let SEARCH_MULTI_SERVICE;

  beforeEach(() => {
    SEARCH_MULTI_SERVICE = new SearchMultiService();
  });

  it("should be an instance of SearchMultiService", () => {
    expect(SEARCH_MULTI_SERVICE).toBeInstanceOf(SearchMultiService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(SEARCH_MULTI_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(SEARCH_MULTI_SERVICE, "findAll");
    await SEARCH_MULTI_SERVICE.findAll("", 1, "popularity.desc");
    expect(spy).toHaveBeenCalledWith("", 1, "popularity.desc");
  });

  it("should return an array of SearchMultiService", async () => {
    const searchmulti = await SEARCH_MULTI_SERVICE.findAll(
      "",
      1,
      "popularity.desc",
    );
    expectTypeOf(searchmulti).toBeObject();
  });
});
