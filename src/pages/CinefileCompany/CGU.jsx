import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";

export default function CGU() {
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
          <Item key="CGU">Conditions Générales d'Utilisation</Item>
        </Breadcrumbs>
        <Heading level={1}>Nos Conditions Générales d'Utilisation</Heading>
        <Text>
          La team CinéFile c'est des Devs propulsés par Euratechnologie
        </Text>
      </Content>
    </>
  );
}
