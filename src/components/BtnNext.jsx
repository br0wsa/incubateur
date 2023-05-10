import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@adobe/react-spectrum";
import ArrowRight from "@spectrum-icons/workflow/ArrowRight";
import {
  fetchActors,
  fetchAnimations,
  fetchlastReleases,
  fetchMovies,
  fetchSeries,
} from "../domain/redux/redux-thunks";

import {
  ACTOR_DATA_TYPE,
  MOVIE_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
  ANIMATION_LIKES,
  LAST_LIKES,
  MOVIE_LIKES,
  SERIE_LIKES,
  ACTOR_LIKES,
} from "../domain/redux/action-data";

/**
 * Bouton "Suivant" pour paginer des données avec un chargement asynchrone.
 * Ce composant déclenche une action Redux lorsqu'il est cliqué pour paginer les données.
 * Les données paginées sont déterminées par la `dataType` propriété passée au composant.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.dataType - Le type de données à paginer.
 * @returns {JSX.Element} - Élément React représentant le bouton "Suivant".
 */
export default function BtnNext({ dataType }) {
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

  /**
   * Gère le clic sur le bouton "Suivant".
   * Scrolle jusqu'à la prochaine page de données horizontalement.
   * Déclenche l'action Redux pour paginer les données.
   * Met à jour l'état de chargement.
   */
  const handleNext = () => {
    const container = document.getElementById(dataType);
    const likeTypes = [
      ACTOR_LIKES,
      MOVIE_LIKES,
      SERIE_LIKES,
      LAST_LIKES,
      ANIMATION_LIKES,
    ];

    container.scrollBy({
      top: 0,
      left: container.offsetWidth,
      behavior: "smooth",
    });

    if (!likeTypes.includes(dataType)) {
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

  return (
    <Button
      aria-label={isLoading ? "chargement des données" : "suivant"}
      variant="secondary"
      right="size-0"
      zIndex="3"
      position="sticky"
      alignSelf="center"
      left="size-0"
      minHeight="size-1250"
      width="size-450"
      onPress={handleNext}
    >
      <ArrowRight />
    </Button>
  );
}

BtnNext.propTypes = {
  dataType: PropTypes.oneOf([
    ACTOR_DATA_TYPE,
    MOVIE_DATA_TYPE,
    SERIE_DATA_TYPE,
    LAST_RELEASE_DATA_TYPE,
    ANIMATION_DATA_TYPE,
    ANIMATION_LIKES,
    LAST_LIKES,
    MOVIE_LIKES,
    SERIE_LIKES,
    ACTOR_LIKES,
  ]).isRequired,
};
