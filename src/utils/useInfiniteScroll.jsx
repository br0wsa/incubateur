import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  fetchActors,
  fetchAnimations,
  fetchlastReleases,
  fetchMovies,
  fetchSeries,
} from "../domain/redux/redux-thunks";

const useInfiniteScroll = (dataType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  const sliceConfig = {
    lastReleases: (param) => dispatch(fetchlastReleases(param)),
    movies: (param) => dispatch(fetchMovies(param)),
    animations: (param) => dispatch(fetchAnimations(param)),
    series: (param) => dispatch(fetchSeries(param)),
    actors: (param) => dispatch(fetchActors(param)),
  };
  const dataTypeForDispatch = sliceConfig[dataType];

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - window.innerHeight * 0.4;

      if (isBottom && !isLoading) {
        setIsLoading(true);

        setTimeout(() => {
          dataTypeForDispatch({ page })
            .then(() => {
              setIsLoading(false);
              setPage((prevPage) => prevPage + 1);
            })
            .catch(() => {
              setIsLoading(false);
            });
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return { isLoading };
};

export default useInfiniteScroll;
