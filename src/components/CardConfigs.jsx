import React from "react";

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
} from "../domain/redux/action-data";

export const CardConfigs = {
  [MOVIE_DATA_TYPE]: {
    title: "Movie",
    render: (data) => <MovieCardWithLikes data={data} />,
  },
  [LAST_RELEASE_DATA_TYPE]: {
    title: "Last Release",
    render: (data) => <LastReleaseCardWithLikes data={data} />,
  },
  [ACTOR_DATA_TYPE]: {
    title: "Artistes",
    render: (data) => <ActorCardWithLikes data={data} />,
  },
  [ANIMATION_DATA_TYPE]: {
    title: "Animations",
    render: (data) => <AnimationCardWithLikes data={data} />,
  },
  [SERIE_DATA_TYPE]: {
    title: "Series",
    render: (data) => <SerieCardWithLikes data={data} />,
  },
};
