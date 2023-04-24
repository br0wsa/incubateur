import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider
} from "@adobe/react-spectrum";
import CardLayout from "../../containers/CardLayout";



export default function MovieDetails() {
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
          <Item key="MovieDetails">
            <Link to="/movie">La liste des films</Link>
          </Item>
          <Item key="MovieDetails">Le film en détail</Item>
        </Breadcrumbs>
        <Heading level={1}>Ici le titre du film</Heading>
        <Divider size="S" marginY="size-100" />

        <Text>Content is king</Text>
        <CardLayout />
      </Content>
    </>
  );
}
