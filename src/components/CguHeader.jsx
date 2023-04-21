import React, { memo } from "react";
import { Heading, View } from "@adobe/react-spectrum";

export const CguHeader = memo(({ titleCgu, version, lastUpdated }) => {
  return (
    <View>
      <Heading level={5}>{titleCgu}</Heading>
      <Heading level={5}>VERSION : {version}</Heading>
      <Heading level={5}>DERNIERE MISE A JOUR : {lastUpdated}</Heading>
    </View>
  );
});
