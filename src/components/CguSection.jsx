import React, { memo, useMemo } from "react";
import { View, Heading, Text } from "@adobe/react-spectrum";
import { v4 as uuidv4 } from "uuid";

export const CguSection = memo(({ section }) => {
  const { title, content } = useMemo(() => section, [section]);

  return (
    <View
      colorVersion="6"
      backgroundColor="purple-300"
      width="100%"
      height="100%"
      borderWidth="thick"
      borderColor="black"
      borderRadius="medium"
      padding="size-100"
      marginY="size-200"
    >
      <Heading level={3}>{title}</Heading>
      <br />
      {content.map((paragraph) => {
        const paragraphId = uuidv4();
        return <Text key={paragraphId}>{paragraph}</Text>;
      })}
    </View>
  );
});
