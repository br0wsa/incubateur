import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
  Image,
} from "@adobe/react-spectrum";

import { Tooltip, TooltipTrigger, Link } from "react-aria-components";

import {
  LAST_RELEASE_DATA_TYPE,
  ACTOR_DATA_TYPE,
  ANIMATION_DATA_TYPE,
  SERIE_DATA_TYPE,
  MOVIE_DATA_TYPE,
} from "../../domain/redux/action-data";

import MoviesLayout from "../../containers/MoviesLayout";
import SeriesLayout from "../../containers/SeriesLayout";
import ActorsLayout from "../../containers/ArtistsLayout";
import AnimationsLayout from "../../containers/AnimationsLayout";
import CardsLayout from "../../containers/CardsLayout";

/**
 * Composant pour afficher les dernières sorties de films, les artistes, les séries et les films d'animation.
 * @component
 * @returns {JSX.Element}
 */
export default function LastRelease() {
  return (
    <>
      <Image
        zIndex="-3"
        top="size-0"
        maxWidth={{
          XS: "100%",
          S: "100%",
          M: "100%",
          L: "100%",
          XL: "100%",
          XXL: "100%",
        }}
        height="size-4600"
        src="header.png"
        position="relative"
        alt="image de présentation de l'application"
        objectFit="cover"
        marginBottom="size-200"
      />
      <Content
        marginBottom="size-200"
        margin="auto"
        width={{
          XS: "95%",
          S: "95%",
          M: "95%",
          L: "95%",
          XL: "95%",
          XXL: "80%",
        }}
      >
        <Breadcrumbs size="M">
          <Item key="LastRelease">
            <RouterLink to="/">Accueil</RouterLink>
          </Item>
        </Breadcrumbs>
        <Heading level={1} maxWidth="auto">
          Tendances
        </Heading>
        <Divider size="S" marginY="size-100" />
        <Text>
          🎬🍿 Bienvenue sur notre application dédiée au septième art, où vous
          pourrez découvrir les trésors cinématographiques issus de la base de
          données de{" "}
          <TooltipTrigger delay={0} offset={50} containerPadding="12">
            <Link isQuiet aria-label="explication du terme TMDB">
              <a href="https://www.themoviedb.org/" target="_blank">
                TMDB.
              </a>
            </Link>
            <Tooltip>
              <Heading level={6}>The Movie Database (TMDB)</Heading>
            </Tooltip>
          </TooltipTrigger>
        </Text>
        <CardsLayout dataType={LAST_RELEASE_DATA_TYPE} />

        <MoviesLayout dataType={MOVIE_DATA_TYPE} />
        <ActorsLayout dataType={ACTOR_DATA_TYPE} />
        <SeriesLayout dataType={SERIE_DATA_TYPE} />
        <AnimationsLayout dataType={ANIMATION_DATA_TYPE} />
      </Content>
    </>
  );
}
