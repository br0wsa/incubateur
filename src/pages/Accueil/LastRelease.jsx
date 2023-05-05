import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
  IllustratedMessage,
  Image,
  View,
} from "@adobe/react-spectrum";

import { Tooltip, TooltipTrigger, Link } from "react-aria-components";
import { LAST_RELEASE_DATA_TYPE } from "../../domain/redux/action-data";
import CardsLayout from "../../containers/CardsLayout";

export default function LastRelease() {
  return (
    <>
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
      </Content>
    </>
  );
}
