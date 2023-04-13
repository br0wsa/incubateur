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

export default function AnimationDetails() {
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
          <Item key="AnimationList">
            <Link to="/animation">La liste des animations</Link>
          </Item>
          <Item key="AnimationDetails">L'animation en détail</Item>
        </Breadcrumbs>
        <Heading level={1}>Ici le titre de l'animation</Heading>
        <Text>Content is king</Text>
        <Divider size="S" marginY="size-100" />
      </Content>
    </>
  );
}
