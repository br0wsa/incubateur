import React from "react";
import PropTypes from "prop-types";
import Heart from "@spectrum-icons/workflow/Heart";
import Add from "@spectrum-icons/workflow/Add";
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
import { Item, TagGroup } from "@react-spectrum/tag";
import { genreConfig } from "./GenreConfig";

/**
 * Composant représentant une carte de film/animation avec des informations détaillées.
 *
 * @param {object} props - Les props du composant.
 * @param {object} props.data - Les données de l'animation/film.
 * @param {boolean} props.added - Booléen indiquant si le composant a été ajouté à la liste des favoris ou non.
 * @param {function} props.handleFavoris - La fonction de gestion d'ajout ou de suppression de l'élément aux favoris.
 * @param {string} props.type - Le type de la carte ("movie" pour un film, "serie" pour une série).
 * @returns {JSX.Element} - Le composant AnimationCard.
 */
export const AnimationCard = ({ data, added, handleFavoris, type }) => {
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
              gap="size-100"
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
                  <Flex direction="column" maxWidth="size-3000" gap="size-100">
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
                      label="Moyenne des votes"
                      value={voteAverage}
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
                      M: false,
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
                      M: false,
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

AnimationCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    backdropPath: PropTypes.string,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    language: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
  handleFavoris: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["animations", "movies", "series", "actors"]).isRequired,
};
