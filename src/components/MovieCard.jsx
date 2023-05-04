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

import { genreConfig } from "./GenreConfig";
import { Item, TagGroup } from "@react-spectrum/tag";
/**

Composant MovieCard qui affiche une carte de film avec des informations comme l'image de l'affiche, le titre, le synopsis, la moyenne des votes, la date de sortie, la langue, les genres et permet également d'ajouter ou de supprimer des favoris.
@param {Object} props - Les propriétés passées au composant.
@param {Object} props.data - Les données du film à afficher.
@param {Function} props.handleFavoris - La fonction pour ajouter ou supprimer des favoris.
@param {boolean} props.added - Détermine si le film est déjà ajouté aux favoris.
@param {string} props.type - Le type de film (ici "movie").
@returns {JSX.Element} - Le composant de carte de film.
*/
export const MovieCard = ({ data, handleFavoris, added, type }) => {
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
                    <Image
                      borderRadius="medium"
                      height="size-1200"
                      src={`https://image.tmdb.org/t/p/w342${backdropPath}`}
                      alt={title}
                      objectFit="cover"
                    />
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
                onPress={() => handleFavoris(id, type)}
                variant="primary"
                aria-label="Ajouter à ma liste de favoris"
              >
                {!added ? <Add /> : <Heart />}
                {!added ? <Text>Ajouter</Text> : <Text>Supprimer</Text>}
              </Button>
            </Flex>
          </View>
        </View>
      )}
    </>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    backdropPath: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    language: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
  handleFavoris: PropTypes.func.isRequired,
  added: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["animations", "movies", "series", "actors"])
    .isRequired,
};
