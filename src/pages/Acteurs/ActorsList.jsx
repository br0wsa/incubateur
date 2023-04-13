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
        <Text>
          Explorez la filmographie des acteurs les plus talentueux et les plus
          charismatiques de l'industrie cinématographique.
        </Text>
        <Divider size="S" marginY="size-100" />
      </Content>
    </>
  );
}
