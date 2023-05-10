import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
  ContextualHelp,
} from "@adobe/react-spectrum";

import {
  ANIMATION_LIKES,
  LAST_LIKES,
  MOVIE_LIKES,
  SERIE_LIKES,
  ACTOR_LIKES,
  LAST_RELEASE_DATA_TYPE,
  ACTOR_DATA_TYPE,
  MOVIE_DATA_TYPE,
  SERIE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
} from "../../domain/redux/action-data";

import CardsLayout from "../../containers/CardsLayout";

export default function Dashboard() {
  return (
    <>
      <Content
        width={{
          XS: "95%",
          S: "95%",
          M: "90%",
          L: "66%",
          XL: "66%",
          XXL: "66%",
        }}
        margin="auto"
      >
        <Breadcrumbs size="M">
          <Item key="LastRelease">
            <Link to="/">Accueil</Link>
          </Item>
          <Item key="Dashboard">Mon tableau de bord</Item>
        </Breadcrumbs>

        <Heading level={3}>Mon tableau de bord</Heading>
        <Text>
          Vous pouvez facilement trouver tous vos films, animations, séries et
          artistes favoris.
        </Text>
        <Divider size="S" marginY="size-100" />

        {/* LAST_LIKES */}
        <Heading level={3}>Tendances</Heading>
        <CardsLayout dataType={LAST_LIKES} />
        {/* ANIMATION_LIKES */}
        <Heading level={3}>Animations</Heading>
        <CardsLayout dataType={ANIMATION_LIKES} />
        {/* MOVIE_LIKES */}
        <Heading level={3}>Films</Heading>
        <CardsLayout dataType={MOVIE_LIKES} />
        {/* ACTOR_LIKES */}
        <Heading level={3}>Acteurs</Heading>
        <CardsLayout dataType={ACTOR_LIKES} />
        {/* SERIE_LIKES */}
        <Heading level={3}>Séries</Heading>
        <CardsLayout dataType={SERIE_LIKES} />
      </Content>
    </>
  );
}
