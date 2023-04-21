import React, { memo, useMemo } from "react";
import { Heading, Well, Link } from "@adobe/react-spectrum";
import { useId } from "@react-aria/utils";

export const LegalInfo = memo(({ legalData }) => {
  const idInfosLegal = useId();
  const { nom, telephone, email, directeur } = useMemo(
    () => legalData,
    [legalData],
  );

  return (
    <Well role="information légales" aria-labelledby={idInfosLegal}>
      <Heading level={5} id={idInfosLegal}>
        CONTACT : {nom}
      </Heading>
      <Heading level={6}>{telephone}</Heading>
      <Heading level={6}>
        <Link>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>
        </Link>
      </Heading>
      <Heading level={6}>Directeur de la publication : {directeur}</Heading>
    </Well>
  );
});
