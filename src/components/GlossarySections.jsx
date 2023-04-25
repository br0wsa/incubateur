import React, { useMemo } from "react";
import { Heading, Well, Text } from "@adobe/react-spectrum";
import { useId } from "@react-aria/utils";

export const GlossarySections = ({ glossaryKeys, glossaryMap }) => {
  const idGlossaryTerm = useId();

  const filteredKeys = useMemo(() => {
    return glossaryKeys.filter((key) => key.id !== "Tout afficher");
  }, [glossaryKeys]);

  return (
    <>
      {filteredKeys.map((key) => {
        const definition =
          glossaryMap.get(key?.name)?.definition ??
          "Pas de définition pour le moment";
        const example =
          glossaryMap.get(key?.name)?.example ?? "Pas d'exemple pour le moment";

        return (
          <Well key={key.id} role="glossaire" aria-labelledby={idGlossaryTerm}>
            <Heading level={3} id={idGlossaryTerm}>
              {key.name}
            </Heading>
            <br />
            <Heading level={5}>Définition</Heading>
            <br />
            <Text>{definition}</Text>
            <br />
            <Heading level={5}>Exemple</Heading>
            <br />
            <Text>{example}</Text>
          </Well>
        );
      })}
    </>
  );
};
