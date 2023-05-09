import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchActors,
  fetchAnimations,
  fetchlastReleases,
  fetchMovies,
  fetchSeries,
} from "../domain/redux/redux-thunks";
import ArrowLeft from "@spectrum-icons/workflow/ArrowLeft";
import ArrowRight from "@spectrum-icons/workflow/ArrowRight";
import { Button } from "@adobe/react-spectrum";

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
  const element = document.getElementById(dataType);

  const buttonLeft = (
    <Button position="absolute" onPress={handlePrev}>
      <ArrowLeft />
    </Button>
  );

  const buttonRight = (
    <Button position="absolute" onPress={handleNext}>
      <ArrowRight />
    </Button>
  );

  const handleNext = () => {
    // juste defiler a gauche scroll t
   }
  const handlePrev = () => { }


  useEffect(() => {
    const handleScroll = () => {
      const isRight =
        window.innerWidth + window.scrollX >=
        document.body.offsetWidth - window.innerWidth * 0.4;

      if (isRight && !isLoading) {
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

  return { isLoading, buttonLeft, buttonRight };
};

export default useInfiniteScroll;
