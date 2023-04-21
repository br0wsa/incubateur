import React, { memo, useMemo } from "react";
import { Heading, Well } from "@adobe/react-spectrum";

export const Address = memo(({ siege }) => {
  const {
    adresse: adresseSiege,
    code_postal: codePostalSiege,
    ville: villeSiege,
    pays: paysSiege,
  } = useMemo(() => siege, [siege]);

  return (
    <Well role="adresse">
      <Heading level={5}>ADRESSE</Heading>
      <Heading level={6}>{adresseSiege}</Heading>
      <Heading level={6}>
        {codePostalSiege} {villeSiege}
      </Heading>
      <Heading level={6}>{paysSiege}</Heading>
    </Well>
  );
});

export default Address;
