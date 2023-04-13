import React from "react";
import { SearchField } from "@adobe/react-spectrum";
import { Content, ContextualHelp, Heading } from "@adobe/react-spectrum";
import { useVisuallyHidden } from "@react-aria/visually-hidden";

export default function Search() {
  const { visuallyHiddenProps } = useVisuallyHidden();

  return (
    <SearchField
      // placeholder="Rechercher un film"
      maxLength={9}
      label={<span {...visuallyHiddenProps}>Rechercher un film</span>}
      labelPosition="side"
      width="size-3600"
      isQuiet
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>
            Rechercher un film, une émission télévisée, un artiste...
          </Heading>
          <Content>
            🎥 Bienvenue sur le moteur de recherche de notre application dédiée
            aux films, séries, acteurs, animations et tout ce qui touche au
            cinéma ! Ici, vous pouvez trouver toutes les informations que vous
            recherchez sur vos films préférés, vos acteurs préférés et bien plus
            encore.
          </Content>
        </ContextualHelp>
      }
    />
  );
}
