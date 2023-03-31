import TMDBAdapter from "../../adapters/TMDBAdapter";
import Film from "../TMDBAggregates/useCaseFilm";

class FilmService {
  constructor() {
    this.findAll = async function ({
      page = 1,
      sortBy = "popularity.desc",
      genreId,
    } = {}) {
      const adapter = new TMDBAdapter();
      const movies = await adapter.getMovies(
        page ?? 1,
        sortBy ?? "popularity.desc",
        genreId ?? "",
      );
      console.log(movies.map((movie) => new Film(movie)));
      return movies.map((movie) => new Film(movie));
    };
  }
}

export default FilmService;
