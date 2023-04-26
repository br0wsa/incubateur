import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
} from "@adobe/react-spectrum";
import CardsLayout from "../../containers/CardsLayout";
import { ACTOR_DATA_TYPE } from "../../domain/redux/action-data";
export default function ActorsList() {
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
          <Item key="home">
            <Link to="/">Accueil</Link>
          </Item>
          <Item key="actorsList">La liste des artistes</Item>
        </Breadcrumbs>
        <Heading level={1}>Les artistes populaires</Heading>
        <Divider size="S" marginY="size-100" />
        <Text>
          Explorez la filmographie des acteurs les plus talentueux et les plus
          charismatiques de l'industrie cinématographique.
        </Text>
        <CardsLayout dataType={ACTOR_DATA_TYPE} />
      </Content>
    </>
  );
}
