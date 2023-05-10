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
      lastReleases: useSelector((state) => state.lastRelease[LAST_LIKES]),
      likedLastReleases: useSelector((state) => state.lastRelease[LAST_LIKES]),
      movies: useSelector((state) => state.movie[MOVIE_LIKES]),
      likedMovies: useSelector((state) => state.movie[MOVIE_LIKES]),
      animations: useSelector((state) => state.animation[ANIMATION_LIKES]),
      likedAnimations: useSelector((state) => state.animation[ANIMATION_LIKES]),
      series: useSelector((state) => state.serie[SERIE_LIKES]),
      likedSeries: useSelector((state) => state.serie[SERIE_LIKES]),
      actors: useSelector((state) => state.actor[ACTOR_LIKES]),
      likedactors: useSelector((state) => state.actor[ACTOR_LIKES]),
    };
    const sliceConfig = {
      [LAST_RELEASE_DATA_TYPE]: (id) =>
        !isAdded
          ? dispatch(addlastReleaseToFavorites({ id }))
          : dispatch(removelastReleaseFromFavorites({ id })),
      [LAST_LIKES]: (id) =>
        !isAdded
          ? dispatch(addlastReleaseToFavorites({ id }))
          : dispatch(removelastReleaseFromFavorites({ id })),
      [MOVIE_DATA_TYPE]: (id) =>
        !isAdded
          ? dispatch(addMovieToFavorites({ id }))
          : dispatch(removeMovieFromFavorites({ id })),
      [MOVIE_LIKES]: (id) =>
        !isAdded
          ? dispatch(addMovieToFavorites({ id }))
          : dispatch(removeMovieFromFavorites({ id })),
      [ANIMATION_DATA_TYPE]: (id) =>
        !isAdded
          ? dispatch(addAnimationToFavorites({ id }))
          : dispatch(removeAnimationFromFavorites({ id })),
      [ANIMATION_LIKES]: (id) =>
        !isAdded
          ? dispatch(addAnimationToFavorites({ id }))
          : dispatch(removeAnimationFromFavorites({ id })),
      [SERIE_DATA_TYPE]: (id) =>
        !isAdded
          ? dispatch(addSerieToFavorites({ id }))
          : dispatch(removeSerieFromFavorites({ id })),
      [SERIE_LIKES]: (id) =>
        !isAdded
          ? dispatch(addSerieToFavorites({ id }))
          : dispatch(removeSerieFromFavorites({ id })),
      [ACTOR_DATA_TYPE]: (id) =>
        !isAdded
          ? dispatch(addActorToFavorites({ id }))
          : dispatch(removeActorFromFavorites({ id })),
      [ACTOR_LIKES]: (id) =>
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
