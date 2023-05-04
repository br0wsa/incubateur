import React from "react";

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

import { Item, TagGroup } from "@react-spectrum/tag";

// helper functions
import { genreConfig } from "./GenreConfig";

export const LastReleaseCard = ({ data, added, handleFavoris }) => {
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
            height="size-3000"
            src={`https://image.tmdb.org/t/p/w342${posterPath}`}
            alt={title}
            objectFit="cover"
          />

          <View
            key={uuidv4()}
            padding="size-100"
            minHeight="size-200"
            maxHeight="auto"
            backgroundColor="gray-400"
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
                onPress={handleFavoris}
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
