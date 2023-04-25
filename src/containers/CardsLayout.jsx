import React from "react";
import { Grid } from "@adobe/react-spectrum";
import { v4 as uuidv4 } from "uuid";
import CineCard from "./CineCard";
import { CardConfigs } from "../components/CardConfigs";

export default function CardsLayout({ type, items }) {
  const config = CardConfigs[type];

  return (
    <Grid
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
      marginTop="size-200"
      marginBottom="size-200"
    >
      {items.map((item) => {
        return <CineCard key={uuidv4()} render={config.render(item)} />;
      })}
    </Grid>
  );
}
