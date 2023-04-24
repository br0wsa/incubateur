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
import AboutLayout from "../../containers/AboutLayout";

export default function About() {
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
          <Item key="Signup">A propos</Item>
        </Breadcrumbs>
        <Heading level={1}>A propos</Heading>
        <Divider size="S" marginY="size-100" />

        <Text>
          La team CinéFile c'est des Devs propulsés par Euratechnologie
        </Text>
        <AboutLayout />
      </Content>
    </>
  );
}
