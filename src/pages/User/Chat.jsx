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
export default function Chat() {
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
          <Item key="Chat">Discussion en direct</Item>
        </Breadcrumbs>
        <Heading level={1}>Messagerie instantanée 📩</Heading>

        <Text>Qui est connecté ?</Text>
        <ContextualHelp variant="info">
          <Heading level={2}>Messagerie instantanée 📩</Heading>
          <Divider size="S" marginY="size-100" />
          <Content>
            <Text>
              Le chat offre une variété de fonctionnalités pratiques pour
              discuter avec vos contacts. Vous pouvez facilement trouver les
              informations suivantes:
              <br />
              - Le statut de connexion des personnes avec lesquelles vous avez
              un suivi.
              <br />
              - Le nombre de personnes connectées sur le chat collectif.
              <br />- Le statut de présence du service client, qui vous aidera
              en cas de problème.
            </Text>
          </Content>
        </ContextualHelp>
      </Content>
    </>
  );
}
