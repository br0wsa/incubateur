import React from "react";
import { Grid, View } from "@adobe/react-spectrum";
import { v4 as uuidv4 } from "uuid";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function CardsLayout() {
  return (
    <Grid
      marginTop="size-300"
      marginBottom="size-300"
      columns={{
        XS: ["1fr", "1fr"],
        S: ["1fr", "1fr", "1fr", "1fr"],
        M: ["1fr", "1fr", "1fr", "1fr"],
        L: ["1fr", "1fr", "1fr", "1fr"],
        XL: ["1fr", "1fr", "1fr", "1fr"],
        XXL: ["1fr", "1fr", "1fr", "1fr"],
      }}
      autoRows="size-3000"
      gap="size-300"
      justifyItems="center"
      alignItems="center"
      justifyContent="space-between"
      alignContent="space-between"
    >
      {cards.map((card, index) => {
        let cardId = uuidv4();
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
            key={cardId}
          >
            <p>ID card : </p>
            <br />
            {cardId}
          </View>
        );
      })}
    </Grid>
  );
}
