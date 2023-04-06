import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  IllustratedMessage,
  Heading,
  Content,
} from "@adobe/react-spectrum";

import NotFound from "@spectrum-icons/illustrations/NotFound";

export default function NotFoundPage() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="NotFoundPage">La page est inexistante</Item>
      </Breadcrumbs>

      <IllustratedMessage>
        <NotFound aria-label="Aucun résultat" />
        <Heading>Erreur 404 : Page non trouvée</Heading>
        <Content>
          Cette page n'est pas disponible. Veuillez vérifier l'URL ou visiter
          une autre page.
        </Content>
      </IllustratedMessage>
    </>
  );
}
