import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";
import GlossaryLayout from "../../containers/GlossaryLayout";

export default function Glossary() {
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
          <Item key="Glossary">Le glossaire</Item>
        </Breadcrumbs>
        <Heading level={1}>Glossaire</Heading>
        <Text>
          Le glossaire de CinéFile est un recueil de termes utilisés sur notre
          site. Il a pour objectif de vous aider à mieux comprendre notre
          univers et notre vocabulaire.
        </Text>
        <GlossaryLayout />
      </Content>
    </>
  );
}
