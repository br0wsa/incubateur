import React from "react";
import PropTypes from "prop-types";
import withLikesHOC from "../containers/withLikesHOC";
import { MovieCard } from "./MovieCard";
import { LastReleaseCard } from "./LastReleaseCard";
import { ActorCard } from "./ActorCard";
import { AnimationCard } from "./AnimationCard";
import { SerieCard } from "./SerieCard";

const MovieCardWithLikes = withLikesHOC(MovieCard);
const LastReleaseCardWithLikes = withLikesHOC(LastReleaseCard);
const ActorCardWithLikes = withLikesHOC(ActorCard);
const AnimationCardWithLikes = withLikesHOC(AnimationCard);
const SerieCardWithLikes = withLikesHOC(SerieCard);

import {
  ACTOR_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  MOVIE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
  LAST_LIKES,
  ACTOR_LIKES,
  ANIMATION_LIKES,
  SERIE_LIKES,
  MOVIE_LIKES,
} from "../domain/redux/action-data";

/**
 * Configurations des cartes de données pour différents types de données.
 * @type {Object}
 */
export const CardConfigs = {
  [MOVIE_DATA_TYPE]: {
    title: "Film",
    /**
     * Rendu d'une carte de film avec likes.
     * @param {Object} data - Les données du film à afficher.
     * @returns {JSX.Element} Une carte de film avec likes.
     */
    render: (data) =>
      data && <MovieCardWithLikes data={data} type={MOVIE_DATA_TYPE} />,
  },
  [MOVIE_LIKES]: {
    title: "Film",
    /**
     * Rendu d'une carte de film avec likes.
     * @param {Object} data - Les données du film à afficher.
     * @returns {JSX.Element} Une carte de film avec likes.
     */
    render: (data) =>
      data && <MovieCardWithLikes data={data} type={MOVIE_LIKES} />,
  },
  [LAST_RELEASE_DATA_TYPE]: {
    title: "Dernière sortie",
    /**
     * Rendu d'une carte de dernière sortie avec likes.
     * @param {Object} data - Les données de la dernière sortie à afficher.
     * @returns {JSX.Element} Une carte de dernière sortie avec likes.
     */
    render: (data) =>
      data && (
        <LastReleaseCardWithLikes data={data} type={LAST_RELEASE_DATA_TYPE} />
      ),
  },
  [LAST_LIKES]: {
    title: "Dernière sortie",
    /**
     * Rendu d'une carte de dernière sortie avec likes.
     * @param {Object} data - Les données de la dernière sortie à afficher.
     * @returns {JSX.Element} Une carte de dernière sortie avec likes.
     */
    render: (data) =>
      data && <LastReleaseCardWithLikes data={data} type={LAST_LIKES} />,
  },
  [ACTOR_DATA_TYPE]: {
    title: "Artistes",
    /**
     * Rendu d'une carte d'artiste avec likes.
     * @param {Object} data - Les données de l'artiste à afficher.
     * @returns {JSX.Element} Une carte d'artiste avec likes.
     */
    render: (data) =>
      data && <ActorCardWithLikes data={data} type={ACTOR_DATA_TYPE} />,
  },
  [ACTOR_LIKES]: {
    title: "Artistes",
    /**
     * Rendu d'une carte d'artiste avec likes.
     * @param {Object} data - Les données de l'artiste à afficher.
     * @returns {JSX.Element} Une carte d'artiste avec likes.
     */
    render: (data) =>
      data && <ActorCardWithLikes data={data} type={ACTOR_LIKES} />,
  },
  [ANIMATION_DATA_TYPE]: {
    title: "Animations",
    /**
     * Rendu d'une carte d'animation avec likes.
     * @param {Object} data - Les données de l'animation à afficher.
     * @returns {JSX.Element} Une carte d'animation avec likes.
     */
    render: (data) =>
      data && <AnimationCardWithLikes data={data} type={ANIMATION_DATA_TYPE} />,
  },
  [ANIMATION_LIKES]: {
    title: "Animations",
    /**
     * Rendu d'une carte d'animation avec likes.
     * @param {Object} data - Les données de l'animation à afficher.
     * @returns {JSX.Element} Une carte d'animation avec likes.
     */
    render: (data) =>
      data && <AnimationCardWithLikes data={data} type={ANIMATION_LIKES} />,
  },
  [SERIE_DATA_TYPE]: {
    title: "Séries",
    /**
     * Rendu d'une carte de série avec likes.
     * @param {Object} data - Les données de la série à afficher.
     * @returns {JSX.Element} Une carte de série avec likes.
     */
    render: (data) =>
      data && <SerieCardWithLikes data={data} type={SERIE_DATA_TYPE} />,
  },
  [SERIE_LIKES]: {
    title: "Séries",
    /**
     * Rendu d'une carte de série avec likes.
     * @param {Object} data - Les données de la série à afficher.
     * @returns {JSX.Element} Une carte de série avec likes.
     */
    render: (data) =>
      data && <SerieCardWithLikes data={data} type={SERIE_LIKES} />,
  },
};

// PropTypes pour chaque composant HOC de carte avec likes
MovieCardWithLikes.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
