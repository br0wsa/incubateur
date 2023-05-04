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
  Divider,
  Button,
} from "@adobe/react-spectrum";
import { Item, TagGroup } from "@react-spectrum/tag";

// helper functions
import { genreConfig } from "./GenreConfig";

export const ActorCard = ({ data, added, handleFavoris }) => {
  const { id, name, gender, knownFor, popularity, profilePath } = data;
  const dataOptions = JSON.parse(knownFor);

  return (
    <>
      {profilePath && (
        <View key={uuidv4()}>
          <Image
            key={uuidv4()}
            borderRadius="medium"
            height="size-3000"
            src={`https://image.tmdb.org/t/p/w342${profilePath}`}
            alt={name}
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
                <Heading key={uuidv4()}>{name.trim()}</Heading>

                <Content>
                  <Flex
                    key={uuidv4()}
                    direction="column"
                    maxWidth="size-3000"
                    gap="size-100"
                  >
                    {profilePath && (
                      <Image
                        key={uuidv4()}
                        borderRadius="medium"
                        height="size-3000"
                        src={`https://image.tmdb.org/t/p/w342${profilePath}`}
                        alt={name}
                        objectFit="cover"
                      />
                    )}

                    <LabeledValue
                      key={uuidv4()}
                      label="Genre"
                      value={gender === 1 ? "Femme" : "Homme"}
                    />
                  </Flex>
                  <View>
                    {dataOptions.map((k) => {
                      const {
                        adult,
                        backdrop_path,
                        genre_ids,
                        id,
                        media_type,
                        original_language,
                        original_title,
                        overview,
                        poster_path,
                        release_date,
                        title,
                        video,
                        vote_average,
                        vote_count,
                      } = k;
                      const date = formatDate(release_date);

                      return (
                        <React.Fragment key={uuidv4()}>
                          <Divider size="S" marginY="size-100" key={uuidv4()} />
                          {backdrop_path && (
                            <View key={uuidv4()}>
                              <Flex
                                key={uuidv4()}
                                direction="column"
                                maxWidth="size-3000"
                                gap="size-100"
                              >
                                {original_title && (
                                  <Heading level={2} key={uuidv4()}>
                                    {original_title.trim()}
                                  </Heading>
                                )}
                                <Image
                                  key={uuidv4()}
                                  borderRadius="medium"
                                  height="size-1200"
                                  src={`https://image.tmdb.org/t/p/w342${backdrop_path}`}
                                  alt={original_title}
                                  objectFit="cover"
                                />

                                {overview && (
                                  <Heading level={6} key={uuidv4()}>
                                    {overview.trim()}
                                  </Heading>
                                )}

                                <Meter
                                  key={uuidv4()}
                                  size="L"
                                  label="Moyenne des votes"
                                  value={vote_average}
                                  variant="warning"
                                />
                                <LabeledValue
                                  key={uuidv4()}
                                  label="Date de sortie"
                                  value={date}
                                />
                                {original_language && (
                                  <LabeledValue
                                    key={uuidv4()}
                                    label="Langue"
                                    value={original_language.trim()}
                                  />
                                )}
                                {adult && (
                                  <LabeledValue
                                    key={uuidv4()}
                                    label="Adult"
                                    value={adult ? "Adult +18" : ""}
                                  />
                                )}
                                {media_type && (
                                  <LabeledValue
                                    key={uuidv4()}
                                    label="Media"
                                    value={media_type.trim()}
                                  />
                                )}
                                <TagGroup aria-label="Catégories">
                                  {genre_ids.map((genreCode) => {
                                    return (
                                      <Item
                                        key={uuidv4()}
                                        textValue={genreConfig[genreCode]}
                                      >
                                        <Text key={uuidv4()}>
                                          {genreConfig[genreCode]}
                                        </Text>
                                      </Item>
                                    );
                                  })}
                                </TagGroup>
                              </Flex>
                            </View>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </View>
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
