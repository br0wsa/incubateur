import React from "react";
import PropTypes from "prop-types";

// redux
import { useSelector, shallowEqual } from "react-redux";
import { CardConfigs } from "../components/CardConfigs";

/**
 * Utilise le useSelector pour récupérer des données spécifiques depuis le Redux Store
 *
 * @param {string} dataType - Le type de données à récupérer
 *
 * @returns {Object} - Un objet contenant le méthode de rendu (render) et les données sélectionnées depuis le Redux Store pour le type de données spécifié (dataTypeForLayout)
 */
const useDataSelector = (dataType) => {
  // Sélectionne la méthode de rendu (render) dans l'objet CardConfigs à la clé dataType.
  const { render } = CardConfigs[dataType];

  // Récupère les données sélectionnées dynamiquement depuis le Redux Store en utilisant le useSelector hook avec shallowEqual pour comparer les données sélectionnées depuis le store.
  const sliceConfig = {
    lastReleases: useSelector(
      (state) => state.lastRelease[dataType],
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

// Définit les propTypes du composant
useDataSelector.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default useDataSelector;
