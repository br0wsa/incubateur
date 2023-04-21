import React, { memo, useMemo } from "react";
import { Heading, Well, Link } from "@adobe/react-spectrum";

export const Hosting = memo(({ hebergeur }) => {
  const {
    raison_sociale: entreprise,
    adresse: adresseHebergeur,
    code_postal: codePostalHebergeur,
    ville: villeHebergeur,
    pays: paysHebergeur,
    telephone: telHebergeur,
    email: emailHebergeur,
  } = useMemo(() => hebergeur, [hebergeur]);

  return (
    <Well role="hebergeur">
      <Heading level={5}>HEBERGEUR : {entreprise}</Heading>
      <Heading level={6}>{adresseHebergeur}</Heading>
      <Heading level={6}>
        {codePostalHebergeur} {villeHebergeur}
      </Heading>
      <Heading level={6}>{paysHebergeur}</Heading>
      <Heading level={6}>{telHebergeur}</Heading>

      <Heading level={6}>
        <Link>
          <a href={`mailto:${emailHebergeur}`} target="_blank" rel="noreferrer">
            {emailHebergeur}
          </a>
        </Link>
      </Heading>
    </Well>
  );
});
