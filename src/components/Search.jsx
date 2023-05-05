import React from "react";
import {
  Button,
  Content,
  ContextualHelp,
  Heading,
} from "@adobe/react-spectrum";
import Bell from "@spectrum-icons/workflow/Bell";

export default function Search() {
  return (
    <>
      {/* <ContextualHelp variant="info">
        <Heading>
          Rechercher un film, une émission télévisée, un artiste...
        </Heading>
        <Content>
          🎥 Bienvenue sur le moteur de recherche de notre application dédiée
          aux films, séries, acteurs, animations et tout ce qui touche au cinéma
          ! Ici, vous pouvez trouver toutes les informations que vous recherchez
          sur vos films préférés, vos acteurs préférés et bien plus encore.
        </Content>
      </ContextualHelp> */}

      <Button
        variant="secondary"
        aria-label="Ring for service"
        onPress={() => console.log("yo")}
      >
        <Bell />
      </Button>
    </>
  );
}
