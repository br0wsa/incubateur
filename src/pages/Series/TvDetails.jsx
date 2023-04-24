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


export default function TvDetails() {
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
          <Item key="TvList">
            <Link to="/tv">La liste des séries</Link>
          </Item>
          <Item key="TvDetails">La série en détail</Item>
        </Breadcrumbs>
        <Heading level={1}>Ici la série Tv en détail</Heading>
        <Divider size="S" marginY="size-100" />

        <Text>Content is king</Text>
        <CardLayout />
      </Content>
    </>
  );
}
