import React from "react";

// redux
import { useSelector, shallowEqual } from "react-redux";
import { CardConfigs } from "../components/CardConfigs";

const useDataSelector = (dataType) => {
  // Selects the render method in the CardConfigs object at dataType key.
  const { render } = CardConfigs[dataType];

  // Retrieves dynamic selected data from the Redux store using the useSelector hook with shallowEqual to compare the selected data from the store.
  const sliceConfig = {
    lastReleases: useSelector(
      (state) => state.lastRealease[dataType],
      shallowEqual,
    ),
    movies: useSelector((state) => state.movie[dataType], shallowEqual),
    animations: useSelector((state) => state.animation[dataType], shallowEqual),
    series: useSelector((state) => state.serie[dataType], shallowEqual),
    actors: useSelector((state) => state.actor[dataType], shallowEqual),
  };
  const dataTypeForLayout = sliceConfig[dataType];
  return { render, dataTypeForLayout };
};

export default useDataSelector;
