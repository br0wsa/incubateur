import React, { useState, useMemo } from "react";
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
      [LAST_RELEASE_DATA_TYPE]: {
        add: addlastReleaseToFavorites,
        remove: removelastReleaseFromFavorites,
      },
      [LAST_LIKES]: {
        add: addlastReleaseToFavorites,
        remove: removelastReleaseFromFavorites,
      },
      [MOVIE_DATA_TYPE]: {
        add: addMovieToFavorites,
        remove: removeMovieFromFavorites,
      },
      [MOVIE_LIKES]: {
        add: addMovieToFavorites,
        remove: removeMovieFromFavorites,
      },
      [ANIMATION_DATA_TYPE]: {
        add: addAnimationToFavorites,
        remove: removeAnimationFromFavorites,
      },
      [ANIMATION_LIKES]: {
        add: addAnimationToFavorites,
        remove: removeAnimationFromFavorites,
      },
      [SERIE_DATA_TYPE]: {
        add: addSerieToFavorites,
        remove: removeSerieFromFavorites,
      },
      [SERIE_LIKES]: {
        add: addSerieToFavorites,
        remove: removeSerieFromFavorites,
      },
      [ACTOR_DATA_TYPE]: {
        add: addActorToFavorites,
        remove: removeActorFromFavorites,
      },
      [ACTOR_LIKES]: {
        add: addActorToFavorites,
        remove: removeActorFromFavorites,
      },
    };

    /**
     * Function to handle clicks on favorites
     * @param {number} id - The ID of the favorited item
     * @param {string} type - The type of the favorited item
     */
    const handleFavoris = (id, type) => {
      setAdded(!isAdded);
      const dataTypeForDispatch = sliceConfig[type];
      const actionToDispatch = isAdded
        ? dataTypeForDispatch.remove
        : dataTypeForDispatch.add;
      dispatchWithTimeout(actionToDispatch, { id });
    };

    const dispatchWithTimeout = (actionToDispatch, params) => {
      setTimeout(() => {
        dispatch(actionToDispatch(params));
      }, 0);
    };

    const addedSelection = selectorConfig[props.type];
    const addedSelectionIds = new Set(addedSelection.map((item) => item.id));
    const isAdded = addedSelectionIds.has(currentId);

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
  WrappedComponent: PropTypes.elementType.isRequired,
};

export default withLikesHOC;
