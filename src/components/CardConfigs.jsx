import React from "react";

// uuidv4 for generating unique keys
import { v4 as uuidv4 } from "uuid";

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
} from "@adobe/react-spectrum";

import { Item, TagGroup } from "@react-spectrum/tag";

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
      const date = new Date(releaseDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

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
                <ContextualHelp
                  variant="info"
                  aria-label="plus de précision sur le contenu"
                  key={uuidv4()}
                >
                  <Heading>{title.trim()}</Heading>

                  <Content>
                    <Flex
                      direction="column"
                      maxWidth="size-3000"
                      gap="size-100"
                    >
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
                      <LabeledValue
                        label="Date de sortie"
                        value={date.toLocaleDateString("fr-FR", options)}
                      />
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
              </View>
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
        voteCount,
        genres,
        language,
        popularity,
      } = data;
      const date = new Date(releaseDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

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
                <ContextualHelp
                  variant="info"
                  aria-label="plus de précision sur le contenu"
                  key={uuidv4()}
                >
                  <Heading>{title.trim()}</Heading>

                  <Content>
                    <Flex
                      direction="column"
                      maxWidth="size-3000"
                      gap="size-100"
                    >
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
                      <LabeledValue
                        label="Date de sortie"
                        value={date.toLocaleDateString("fr-FR", options)}
                      />
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
              </View>
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
                        const date = new Date(release_date);
                        const options = {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        };
                        return (
                          <React.Fragment key={uuidv4()}>
                            <Divider
                              size="S"
                              marginY="size-100"
                              key={uuidv4()}
                            />
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
                                    value={date.toLocaleDateString(
                                      "fr-FR",
                                      options,
                                    )}
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
                                      value="Adulte"
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
              </View>
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
      const date = new Date(releaseDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

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
                <ContextualHelp
                  variant="info"
                  aria-label="plus de précision sur le contenu"
                  key={uuidv4()}
                >
                  <Heading>{title.trim()}</Heading>

                  <Content>
                    <Flex
                      direction="column"
                      maxWidth="size-3000"
                      gap="size-100"
                    >
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
                      <LabeledValue
                        label="Date de sortie"
                        value={date.toLocaleDateString("fr-FR", options)}
                      />
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
              </View>
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
      const date = new Date(releaseDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return (
        <>
          {posterPath && (
            <View key={id}>
              <Image
                borderRadius="medium"
                height="size-3000"
                src={`https://image.tmdb.org/t/p/w342${posterPath}`}
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
                <ContextualHelp
                  variant="info"
                  aria-label="plus de précision sur le contenu"
                  key={uuidv4()}
                >
                  <Heading>{name.trim()}</Heading>

                  <Content>
                    <Flex
                      direction="column"
                      maxWidth="size-3000"
                      gap="size-100"
                    >
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
                      <LabeledValue
                        label="Date de sortie"
                        value={date.toLocaleDateString("fr-FR", options)}
                      />
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
              </View>
            </View>
          )}
        </>
      );
    },
  },
};
