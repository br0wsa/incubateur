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
import AccountLayout from "../../containers/AccountLayout";
export default function Account() {
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
          <Item key="Account">Votre compte</Item>
        </Breadcrumbs>
        <Heading level={1}>Mon compte</Heading>
        <Divider size="S" marginY="size-100" />
        <Text>
          Bienvenue sur votre compte utilisateur ! Ici, vous pouvez trouver
          plusieurs fonctionnalités pour personnaliser et gérer votre compte.
        </Text>
        <ContextualHelp variant="info">
          <Heading level={2}>Votre compte</Heading>
          <Content>
            <Text>
              Modifier mes coordonnées : Si vous avez déménagé ou changé de
              numéro de téléphone, vous pouvez facilement mettre à jour vos
              informations personnelles ici.
              <br />
              Supprimer mon compte : Si vous souhaitez supprimer votre compte de
              manière permanente, cette fonctionnalité vous permettra de le
              faire.
              <br />
              Modifier mes préférences de confidentialité : Vous pouvez gérer
              les informations que vous partagez avec d'autres utilisateurs ou
              avec le public en modifiant vos préférences de confidentialité.
              <br />
              Aide et support : Si vous avez des questions ou des problèmes avec
              votre compte, notre service client est à votre disposition pour
              vous aider. Vous pouvez contacter notre équipe d'assistance en
              utilisant le chat en direct ou en envoyant un message via notre
              formulaire de contact.
            </Text>
          </Content>
        </ContextualHelp>
        <AccountLayout />
      </Content>
    </>
  );
}
