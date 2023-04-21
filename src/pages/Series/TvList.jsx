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

export default function TvList() {
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
          <Item key="TvList">La liste des séries</Item>
        </Breadcrumbs>
        <Heading level={1}>Les séries populaires</Heading>
        <Text>
          Découvrez les séries qui ont marqué l'histoire de la télévision et
          celles qui feront l'événement de demain.
        </Text>
        <Divider size="S" marginY="size-100" />
        <CardsLayout />
      </Content>
    </>
  );
}
