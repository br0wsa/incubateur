import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";
import TermsLayout from "../../containers/TermsLayout";

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
        <Heading level={1}>Conditions Générales d'Utilisation</Heading>
     
        <Text>
          Notre équipe de développeurs est propulsée par Euratechnologie.
        </Text>
        <TermsLayout />
      </Content>
    </>
  );
}
