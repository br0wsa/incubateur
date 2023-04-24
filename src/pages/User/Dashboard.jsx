import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
  ContextualHelp,
} from "@adobe/react-spectrum";

export default function Dashboard() {
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
          <Item key="Dashboard">Mon tableau de bord</Item>
        </Breadcrumbs>
        <Heading level={1}>Mon tableau de bord</Heading>

        <Text>
          Vous pouvez facilement trouver tous vos films, animations, séries et
          artistes favoris.
        </Text>
        <ContextualHelp variant="info">
          <Heading level={2}>Tableau de bord</Heading>
          <Divider size="S" marginY="size-100" />
          <Content>
            <Text>
              Le tableau de bord offre une variété de fonctionnalités pratiques
              pour gérer vos divertissements. Vous pouvez facilement trouver
              tous vos films, animations, séries et artistes favoris.
            </Text>
          </Content>
        </ContextualHelp>
      </Content>
    </>
  );
}
