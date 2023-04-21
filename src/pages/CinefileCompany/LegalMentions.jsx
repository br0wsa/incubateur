import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";
import LegalLayout from "../../containers/LegalLayout";

export default function LegalMentions() {
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
          <Item key="LegalMentions">Les mentions légales</Item>
        </Breadcrumbs>
        <Heading level={1}>Mentions légales</Heading>
        <Text>Ce site est édité par CinéFile.</Text>
        <LegalLayout />
      </Content>
    </>
  );
}
