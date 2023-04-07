import React from "react";
import categories from "../assets/data/categories";
import { Item, TagGroup } from "@react-spectrum/tag";
import { Content, ContextualHelp, Heading } from "@adobe/react-spectrum";

export default function Labels() {
  return (
    <TagGroup
      maxRows={1}
      label="Categories"
      items={categories}
      aria-label="Les différentes catégories"
      contextualHelp={
        <ContextualHelp>
          <Heading>Que sont les étiquettes ?</Heading>
          <Content>Les étiquettes vous aides à catégoriser le contenu.</Content>
        </ContextualHelp>
      }
    >
      {(item) => <Item>{item.name}</Item>}
    </TagGroup>
  );
}
