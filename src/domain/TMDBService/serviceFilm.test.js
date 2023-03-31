import FilmService from "./serviceFilm.js";

describe("FilmService", () => {
  let FILM_SERVICE;

  beforeEach(() => {
    FILM_SERVICE = new FilmService();
  });

  it("should be an instance of FilmService", () => {
    expect(FILM_SERVICE).toBeInstanceOf(FilmService);
  });

  it("should have method 'findAll'", () => {
    vi.spyOn(FILM_SERVICE, "findAll");
  });

  it("should call with the expected arguments", async () => {
    const spy = vi.spyOn(FILM_SERVICE, "findAll");
    await FILM_SERVICE.findAll(1, "popularity.desc", "");
    expect(spy).toHaveBeenCalledWith(1, "popularity.desc", "");
  });

  it("should return an array of FilmService", async () => {
    const film = await FILM_SERVICE.findAll(1, "popularity.desc");
    expectTypeOf(film).toBeObject();
  });
});
