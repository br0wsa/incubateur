import React from "react";

// spectrum-ui components
import Heart from "@spectrum-icons/workflow/Heart";
import StarOutline from "@spectrum-icons/workflow/StarOutline";
import NotFound from "@spectrum-icons/illustrations/NotFound";
import {
  View,
  Image,
  Heading,
  Grid,
  LabeledValue,
  Badge,
  IllustratedMessage,
} from "@adobe/react-spectrum";

// helper functions
import { genreConfig } from "./GenreConfig";
import {
  ACTOR_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  MOVIE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
} from "../domain/redux/action-data";

// styles
export const CardConfigs = {
  [MOVIE_DATA_TYPE]: {
    title: "Movie",
    render: (data) => {
      const {
        id,
        title,
        overview,
        releaseDate,
        posterPath,
        backdropPath,
        voteAverage,
        voteCount,
        genres,
        language,
        popularity,
      } = data;
      return (
        <>
          {posterPath && (
            <View>
              <Heading level={5}>{title}</Heading>
            </View>
          )}
        </>
      );
    },
  },
  [LAST_RELEASE_DATA_TYPE]: {
    title: "Last Release",
    render: (data) => {
      const {
        id,
        title,
        overview,
        releaseDate,
        posterPath,
        backdropPath,
        voteAverage,
        voteCount,
        genres,
        language,
        popularity,
      } = data;
      const date = new Date(releaseDate);
      return (
        <>
          {posterPath && (
            <View key={id} borderRadius="medium">
              <Image
                height="size-500"
                src={`https://image.tmdb.org/t/p/w154${posterPath}`}
                alt={overview}
                objectFit="cover"
              />
              <Heading level={5}>{title}</Heading>
            </View>
          )}
        </>
      );
    },
  },
  [ACTOR_DATA_TYPE]: {
    title: "Artistes",
    render: (data) => {
      const { id, name, gender, knownFor, popularity, profilePath } = data;
      return (
        <>
          {profilePath && (
            <View>
              <Heading level={5}>{name}</Heading>
            </View>
          )}
        </>
      );
    },
  },
  [ANIMATION_DATA_TYPE]: {
    title: "Animations",
    render: (data) => {
      const {
        id,
        title,
        overview,
        releaseDate,
        posterPath,
        backdropPath,
        voteAverage,
        voteCount,
        genres,
        language,
        popularity,
      } = data;
      return (
        <>
          {posterPath && (
            <View>
              <Heading level={5}>{title}</Heading>
            </View>
          )}
        </>
      );
    },
  },
  [SERIE_DATA_TYPE]: {
    title: "Series",
    render: (data) => {
      const {
        id,
        name,
        overview,
        releaseDate,
        posterPath,
        backdropPath,
        voteAverage,
        voteCount,
        genres,
        language,
        popularity,
      } = data;
      return (
        <>
          {posterPath && (
            <View>
              <Heading level={5}>{name}</Heading>
            </View>
          )}
        </>
      );
    },
  },
};
