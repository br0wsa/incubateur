import React from "react";
import { Heading, Content, Text, Divider } from "@adobe/react-spectrum";
import CardLayout from "../../containers/CardLayout";
export default function LastReleaseDetails() {
  return (
    <>
      <Content
        width={{
          XS: "95%",
          S: "95%",
          M: "90%",
          L: "66%",
          XL: "66%",
          XXL: "66%",
        }}
        margin="auto"
      >
        <Heading level={1}>Votre recherche en détail</Heading>
        <Divider size="S" marginY="size-100" />
        <Text>Content is king</Text>
        <CardLayout />
      </Content>
    </>
  );
}
