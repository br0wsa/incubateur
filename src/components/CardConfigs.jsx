import React from "react";

// spectrum-ui components
import Heart from "@spectrum-icons/workflow/Heart";
import StarOutline from "@spectrum-icons/workflow/StarOutline";
import NotFound from "@spectrum-icons/illustrations/NotFound";
import {
  View,
  Image,
  Heading,
  Flex,
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
        <View>
          <p>{title}</p>
          <p>{overview}</p>
          <p>{releaseDate}</p>
          <p>{genres}</p>
          <p>{language}</p>
          <p>{popularity}</p>
        </View>
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
        // backdropPath,
        // voteAverage,
        // voteCount,
        genres,
        language,
        popularity,
      } = data;
      const date = new Date(releaseDate);
      return (
        <Flex width="100%" height="100%" direction="column">
          <View key={id} borderRadius="medium">
            {posterPath ? (
              <Image
                height="size-500"
                src={`https://image.tmdb.org/t/p/w154${posterPath}`}
                alt={overview}
                objectFit="cover"
              />
            ) : (
              <IllustratedMessage>
                <NotFound aria-label="Aucun résultat" />
              </IllustratedMessage>
            )}
          </View>
          <View>
            <Heading level={5}>{title}</Heading>
            <Heading level={6}>{overview}</Heading>
            <LabeledValue
              label="Popularité"
              value={popularity}
              formatOptions={{ type: "unit" }}
            />
            <Flex direction="column" gap={8}>
              {genres.map((genre) => (
                <Badge key={genre} variant="yellow">
                  {genreConfig[genre]}
                </Badge>
              ))}
            </Flex>
            <LabeledValue label="Sortie" value={date.toLocaleDateString()} />

            <p>{language}</p>
            <Heart aria-label="Heart" />
          </View>
        </Flex>
      );
    },
  },
  [ACTOR_DATA_TYPE]: {
    title: "Artistes",
    render: (data) => {
      const { id, name, gender, knownFor, popularity, profilePath } = data;
      return (
        <View>
          <p>{name}</p>
          <p>{gender}</p>
          <p>{knownFor}</p>
          <p>{popularity}</p>
          <p>{profilePath}</p>
        </View>
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
        <View>
          <p>{title}</p>
          <p>{overview}</p>
          <p>{releaseDate}</p>
          <p>{popularity}</p>
          <p>{genres}</p>
          <p>{language}</p>
        </View>
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
        <View>
          <p>{name}</p>
          <p>{overview}</p>
          <p>{releaseDate}</p>
          <p>{genres}</p>
          <p>{language}</p>
          <p>{popularity}</p>
        </View>
      );
    },
  },
};
