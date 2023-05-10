import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Heading,
  Flex,
  Image,
  Text,
  LabeledValue,
  Meter,
} from "@adobe/react-spectrum";
import { Item, TagGroup } from "@react-spectrum/tag";
import { genreConfig } from "./GenreConfig";
import formatDate from "../utils/formatDate";
import { v4 as uuidv4 } from "uuid";

export default function SearchCards({ media }) {
  const {
    name,
    overview,
    releaseDate,
    posterPath,
    voteAverage,
    voteCount,
    genres,
    language,
    popularity,
    gender,
    title,
    profilePath,
  } = media;
  const date = formatDate(releaseDate);

  return (
    <>
      {(posterPath || profilePath) && (name || title) && (
        <View
          marginTop="size-250"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          padding="size-150"
        >
          <Flex direction="row" height="auto" gap="size-100">
            <View maxWidth="37%">
              <Image
                borderRadius="large"
                height="260"
                src={`https://image.tmdb.org/t/p/w342${
                  posterPath || profilePath
                }`}
                alt={name || title}
                objectFit="cover"
              />
            </View>
            <View maxWidth="60%">
              <View>
                <Flex direction="column">
                  <Text>{name || title}</Text>
                  {name && (
                    <LabeledValue
                      label="Genre"
                      value={gender === 1 ? "Femme" : "Homme"}
                    />
                  )}
                  {overview && <Heading level={6}>{overview}</Heading>}
                </Flex>
              </View>
              <View>
                <Flex direction="column" gap="size-100">
                  {language && <LabeledValue label="Langue" value={language} />}
                  {title && date && (
                    <LabeledValue label="Date de sortie" value={date} />
                  )}

                  {voteCount && (
                    <Meter
                      size="S"
                      label="Votes"
                      value={voteAverage ?? popularity}
                      variant="warning"
                    />
                  )}
                  {genres && (
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
                  )}
                </Flex>
              </View>
            </View>
          </Flex>
        </View>
      )}
    </>
  );
}
