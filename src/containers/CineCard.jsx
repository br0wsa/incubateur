import React from "react";
import { Grid, View } from "@adobe/react-spectrum";
import { v4 as uuidv4 } from "uuid";

export default function CineCard({ render }) {
  let keyView = uuidv4();

  return (
    <View
      colorVersion="6"
      backgroundColor="purple-300"
      width="100%"
      height="100%"
      borderWidth="thick"
      borderColor="black"
      borderRadius="medium"
      padding="size-10"
      key={keyView}
    >
      {keyView}
      {render}
    </View>
  );
}
