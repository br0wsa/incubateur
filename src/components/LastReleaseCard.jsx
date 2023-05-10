import React from "react";
import PropTypes from "prop-types";

import Heart from "@spectrum-icons/workflow/Heart";
import Add from "@spectrum-icons/workflow/Add";

// uuidv4 for generating unique keys
import { v4 as uuidv4 } from "uuid";
import formatDate from "../utils/formatDate";

import {
  View,
  Flex,
  Meter,
  Image,
  Content,
  Text,
  Heading,
  ContextualHelp,
  LabeledValue,
  Button,
} from "@adobe/react-spectrum";
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
import { Item, TagGroup } from "@react-spectrum/tag";

// helper functions
import { genreConfig } from "./GenreConfig";

/**
 * Composant de carte pour la dernière sortie de film.
 * @param {Object} props - Les propriétés du composant.
 * @param {MovieData} props.data - Les données du film à afficher.
 * @param {boolean} props.added - Indique si le film est déjà ajouté aux favoris.
 * @param {function} props.handleFavoris - La fonction de gestion des favoris.
 * @param {("animations"|"movies"|"series"|"actors"|"lastReleases")} props.type - Le type de la carte.
 * @returns {JSX.Element} - Le code JSX pour le composant de carte de dernière sortie de film.
 */
export const LastReleaseCard = ({ data, added, handleFavoris, type }) => {
  const {
    id,
    title,
    overview,
    releaseDate,
    posterPath,
    backdropPath,
    voteCount,
    genres,
    language,
    popularity,
  } = data;
  const date = formatDate(releaseDate);

  return (
    <>
      {posterPath && (
        <View key={id}>
          <Image
            borderRadius="medium"
            height="size-2600"
            src={`https://image.tmdb.org/t/p/w342${posterPath}`}
            alt={title}
            objectFit="cover"
          />

          <View
            key={uuidv4()}
            padding="size-100"
            minHeight="size-100"
            maxHeight="auto"
            backgroundColor="gray-200"
          >
            <Flex
              gap="size-50"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <ContextualHelp
                variant="info"
                aria-label="plus de précision sur le contenu"
                key={uuidv4()}
              >
                <Heading>{title.trim()}</Heading>

                <Content>
                  <Flex direction="column" gap="size-100">
                    {backdropPath && (
                      <Image
                        borderRadius="medium"
                        height="size-1200"
                        src={`https://image.tmdb.org/t/p/w342${backdropPath}`}
                        alt={title}
                        objectFit="cover"
                      />
                    )}
                    <Heading level={6}>{overview.trim()}</Heading>

                    <Meter
                      size="L"
                      label="Popularité"
                      value={popularity}
                      variant="warning"
                    />
                    <LabeledValue label="Date de sortie" value={date} />
                    <LabeledValue label="Langue" value={language.trim()} />
                    <TagGroup aria-label="Catégories">
                      {genres.map((genreCode) => {
                        return (
                          <Item
                            key={uuidv4()}
                            textValue={genreConfig[genreCode]}
                          >
                            <Text>{genreConfig[genreCode]}</Text>
                          </Item>
                        );
                      })}
                    </TagGroup>
                  </Flex>
                </Content>
              </ContextualHelp>

              <Button
                width={{
                  M: "100%",
                  L: "100%",
                  XL: "100%",
                  XXL: "100%",
                }}
                onPress={() => handleFavoris(id, type)}
                variant="secondary"
                aria-label="Ajouter à ma liste de favoris"
              >
                {!added ? <Add /> : <Heart />}
                {!added ? (
                  <Text
                  isHidden={{
                    XS: true,
                    S: true,
                    M: true,
                    L: false,
                    XL: false,
                    XXL: false,
                  }}
                  >
                    Ajouter
                  </Text>
                ) : (
                  <Text
                  isHidden={{
                    XS: true,
                    S: true,
                    M: true,
                    L: false,
                    XL: false,
                    XXL: false,
                  }}
                  >
                    Supprimer
                  </Text>
                )}
              </Button>
            </Flex>
          </View>
        </View>
      )}
    </>
  );
};
LastReleaseCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    backdropPath: PropTypes.string,
    voteCount: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.number),
    language: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
  handleFavoris: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
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
