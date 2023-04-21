import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";

import CardsLayout from "../../containers/CardsLayout";
import { Tooltip, TooltipTrigger, Link } from "react-aria-components";

export default function LastRelease() {
  return (
    <>
      <Content
        margin="auto"
        width={{
          XS: "95%",
          S: "95%",
          M: "90%",
          L: "66%",
          XL: "66%",
          XXL: "66%",
        }}
      >
        <Breadcrumbs size="M">
          <Item key="LastRelease">
            <RouterLink to="/">Accueil</RouterLink>
          </Item>
        </Breadcrumbs>
        <Heading level={1}>Tendances</Heading>

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

        <CardsLayout />
      </Content>
    </>
  );
}
