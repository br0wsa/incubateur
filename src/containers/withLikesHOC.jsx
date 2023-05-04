import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  addlastReleaseToFavorites,
  removelastReleaseFromFavorites,
} from "../domain/redux/lastrelease/lastReleaseSlice";
import {
  addActorToFavorites,
  removeActorFromFavorites,
} from "../domain/redux/actor/actorSlice";
import {
  addAnimationToFavorites,
  removeAnimationFromFavorites,
} from "../domain/redux/animation/animationSlice";
import {
  addMovieToFavorites,
  removeMovieFromFavorites,
} from "../domain/redux/movie/movieSlice";
import {
  addSerieToFavorites,
  removeSerieFromFavorites,
} from "../domain/redux/series/serieSlice";

/**
 * Composant HOC pour gérer la logique de favoris des différentes entités
 * @param {React.Component} WrappedComponent - Composant à wrapper
 * @returns {React.Component} Composant avec la logique de favoris
 */
function withLikesHOC(WrappedComponent) {
  return function ComponentWithLikes(props) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);
    const currentId = props.data.id;
    const selectorConfig = {
      lastReleases: useSelector((state) => state.lastRelease.favorites),
      movies: useSelector((state) => state.movie.favorites),
      animations: useSelector((state) => state.animation.favorites),
      series: useSelector((state) => state.serie.favorites),
      actors: useSelector((state) => state.actor.favorites),
    };
    const sliceConfig = {
      lastReleases: (id) =>
        !isAdded
          ? dispatch(addlastReleaseToFavorites({ id }))
          : dispatch(removelastReleaseFromFavorites({ id })),
      movies: (id) =>
        !isAdded
          ? dispatch(addMovieToFavorites({ id }))
          : dispatch(removeMovieFromFavorites({ id })),
      animations: (id) =>
        !isAdded
          ? dispatch(addAnimationToFavorites({ id }))
          : dispatch(removeAnimationFromFavorites({ id })),
      series: (id) =>
        !isAdded
          ? dispatch(addSerieToFavorites({ id }))
          : dispatch(removeSerieFromFavorites({ id })),
      actors: (id) =>
        !isAdded
          ? dispatch(addActorToFavorites({ id }))
          : dispatch(removeActorFromFavorites({ id })),
    };

    /**
     * Fonction pour gérer les clics sur les favoris
     * @param {number} id - L'ID de l'élément favorisé
     * @param {string} type - Le type de l'élément favorisé
     */
    const handleFavoris = (id, type) => {
      setAdded(!isAdded);
      const dataTypeForDispatch = sliceConfig[type];
      dataTypeForDispatch(id);
    };
    const addedSelection = selectorConfig[props.type];
    const isAdded = !!addedSelection.find((item) => item.id === currentId);

    return (
      <WrappedComponent
        {...props}
        added={isAdded ?? added}
        handleFavoris={handleFavoris}
      />
    );
  };
}

withLikesHOC.propTypes = {
  /**
   * Composant à wrapper
   */
  WrappedComponent: PropTypes.elementType.isRequired,
};

export default withLikesHOC;
