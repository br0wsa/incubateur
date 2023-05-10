import React from "react";
import PropTypes from "prop-types";
import { useSelector, shallowEqual } from "react-redux";
import { CardConfigs } from "../components/CardConfigs";

const useDataSelector = (dataType) => {
  const { render } = CardConfigs[dataType];

  const sliceConfig = {
    lastReleases: useSelector(
      (state) => state.lastRelease[dataType],
      shallowEqual,
    ),
    likedLastReleases: useSelector(
      (state) => state.lastRelease[dataType],
      shallowEqual,
    ),
    movies: useSelector((state) => state.movie[dataType], shallowEqual),
    likedMovies: useSelector((state) => state.movie[dataType], shallowEqual),
    animations: useSelector((state) => state.animation[dataType], shallowEqual),
    likedAnimations: useSelector(
      (state) => state.animation[dataType],
      shallowEqual,
    ),
    series: useSelector((state) => state.serie[dataType], shallowEqual),
    likedSeries: useSelector((state) => state.serie[dataType], shallowEqual),
    actors: useSelector((state) => state.actor[dataType], shallowEqual),
    likedactors: useSelector((state) => state.actor[dataType], shallowEqual),
  };

  const dataTypeForLayout = sliceConfig[dataType];

  return { render, dataTypeForLayout };
};

useDataSelector.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default useDataSelector;
