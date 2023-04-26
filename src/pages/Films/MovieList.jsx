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
import { MOVIE_DATA_TYPE } from "../../domain/redux/action-data";

export default function MovieList() {
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
          <Item key="MovieList">La liste des films</Item>
        </Breadcrumbs>
        <Heading level={1}>Les films populaires</Heading>
        <Divider size="S" marginY="size-100" />
        <Text> Du cinéma d'auteur aux blockbusters...</Text>

        <CardsLayout dataType={MOVIE_DATA_TYPE} />
      </Content>
    </>
  );
}
