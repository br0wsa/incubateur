import React from "react";
import { View, Grid, Text, Heading, Link } from "@adobe/react-spectrum";

export function ContactCard({
  cardId,
  companyName,
  address,
  email,
  phone,
  linkedin,
  github,
}) {
  const showEmailAndPhone = !linkedin && !github;
  const showLinkedinAndGithub = linkedin && github;
  return (
    <View
      width="100%"
      height="100%"
      borderWidth="thin"
      borderColor="gray-400"
      colorVersion="6"
      backgroundColor="purple-400"
      borderRadius="medium"
      padding="size-300"
      key={cardId}
    >
      <Grid
        row="1fr"
        marginTop="size-100"
        marginBottom="size-100"
        autoRows={{
          XS: ["static-size-500"],
          S: ["static-size-500"],
          M: ["static-size-300"],
          L: ["static-size-200"],
          XL: ["static-size-200"],
          XXL: ["static-size-400"],
        }}
        gap="size-200"
      >
        <Heading level={3} position="top" margintop="size-50">
          {companyName}
        </Heading>
        <br />
        <Text fontSize="size-400" color="gray-600" marginBottom="size-50">
          {address.street}
        </Text>
        <Text fontSize="size-400" color="gray-600" marginBottom="size-50">
          {address.postal_code} {address.city}
        </Text>
        <Text fontSize="size-400" color="gray-600" marginBottom="size-50">
          {address.country}
        </Text>
        {showEmailAndPhone && (
          <>
            <Text fontSize="size-400" color="gray-600" marginBottom="size-100">
              <Link>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  {email}
                </a>
              </Link>
            </Text>
            <Text fontSize="size-400" color="gray-600">
              {phone}
            </Text>
          </>
        )}
        {showLinkedinAndGithub && (
          <>
            <Link>
              <a href={linkedin} target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </Link>
            <Link>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Link>
          </>
        )}
      </Grid>
    </View>
  );
}
