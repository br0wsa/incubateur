import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchJson";
import {
  View,
  Heading,
  Well,
  Text,
  Content,
  ContextualHelp,
} from "@adobe/react-spectrum";
import { useId } from "@react-aria/utils";
import { Item, TagGroup } from "@react-spectrum/tag";
import { v4 as uuidv4 } from "uuid";

export default function GlossaryLayout() {
  const idGlossaryTerm = useId();
  const [glossaryMap, setGlossaryMap] = useState(new Map());
  const [glossaryKeys, setGlossaryKeys] = useState([]);

  useEffect(() => {
    async function fetchGlossary() {
      const data = await fetchData("src/assets/data/glossaire.json");

      // Create a new Map with the glossary data
      const map = new Map();
      for (const key in data) {
        map.set(key, data[key]);
      }

      setGlossaryMap(map);
      setGlossaryKeys(
        Array.from(map.keys()).map((key) => ({ id: key, name: key })),
      );
    }

    fetchGlossary();
  }, []);

  let removeItem = (key) => {
    console.log(key);
    setGlossaryKeys((prevItems) => prevItems.filter((item) => key == item.id));
  };

  return (
    <View>
      <View
        maxWidth={{
          XS: "100%",
          S: "100%",
          M: "75%",
          L: "75%",
          XL: "75%",
          XXL: "75%",
        }}
        minHeight="auto"
        padding="size-200"
        colorVersion="6"
        backgroundColor="purple-300"
        marginY="size-300"
        borderRadius="medium"
        labelPosition="side"
        labelAlign="end"
      >
        <TagGroup
          label="Réduire la recherche"
          description="Chaque étiquette correspond à un terme du glossaire"
          aria-label="Réduire la recherche"
          onRemove={removeItem}
          allowsRemoving
          items={glossaryKeys}
          contextualHelp={
            <ContextualHelp>
              <Heading>Réduire la recherche</Heading>
              <Content>
                Tous les termes du glossaire sont regroupés ici. En cliquant
                vous reduisez les termes.
              </Content>
            </ContextualHelp>
          }
        >
          {(item) => <Item key={item.name}>{item.name}</Item>}
        </TagGroup>
      </View>

      {/* Component GlossaryTerms */}
      {glossaryKeys.map((key) => (
        <Well key={key.id} role="glossaire" aria-labelledby={idGlossaryTerm}>
          <Heading level={3} id={idGlossaryTerm}>
            {key.name}
          </Heading>
          <Heading level={5}>Définition</Heading>
          <Text>{glossaryMap.get(key.name).definition}</Text>
          <Heading level={5}>Exemple</Heading>
          <Text>{glossaryMap.get(key.name).exemple}</Text>
        </Well>
      ))}
    </View>
  );
}
