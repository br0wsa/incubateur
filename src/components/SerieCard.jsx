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
 * Composant pour afficher une carte de série avec informations et possibilité de l'ajouter/supprimer de la liste de favoris.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les informations sur la série à afficher.
 * @param {boolean} props.added - Indique si la série a été ajoutée à la liste de favoris.
 * @param {Function} props.handleFavoris - La fonction pour ajouter ou supprimer la série de la liste de favoris.
 * @param {string} props.type - Le type de data (ici "serie").
 * @return {JSX.Element} - Retourne le code HTML pour afficher la carte de série.
 */
export const SerieCard = ({ data, added, handleFavoris, type }) => {
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
  const date = formatDate(releaseDate);

  return (
    <>
      {posterPath && (
        <View key={id}>
          <Image
            borderRadius="medium"
            height="size-2600"
            src={`https://image.tmdb.org/t/p/w342${posterPath}`}
            alt={name}
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
                <Heading>{name.trim()}</Heading>

                <Content>
                  <Flex direction="column" maxWidth="size-3000" gap="size-100">
                    {backdropPath && (
                      <Image
                        borderRadius="medium"
                        height="size-1200"
                        src={`https://image.tmdb.org/t/p/w342${backdropPath}`}
                        alt={name}
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
                          genreCode && (
                            <Item
                              key={uuidv4()}
                              textValue={genreConfig[genreCode]}
                            >
                              <Text>{genreConfig[genreCode]}</Text>
                            </Item>
                          )
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

SerieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    backdropPath: PropTypes.string,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
    language: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
  handleFavoris: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
