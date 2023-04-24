import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchJson";

import {
  View,
  Heading,
  Well,
  Text,
  Content,
  ContextualHelp,
  ComboBox,
} from "@adobe/react-spectrum";
import { useId } from "@react-aria/utils";
import { Item, TagGroup } from "@react-spectrum/tag";
import { v4 as uuidv4 } from "uuid";

export default function GlossaryLayout() {
  const idGlossaryTerm = useId();
  const [glossaryMap, setGlossaryMap] = useState(new Map());
  const [glossaryKeys, setGlossaryKeys] = useState([]);
  const [allGlossaryKeys, setAllGlossaryKeys] = useState([]);

  let [value, setValue] = React.useState("Tout afficher");
  let [majorId, setMajorId] = React.useState("");

  let onSelectionChange = (id) => {
    setMajorId(id);
    if (id === "Tout afficher") {
      setGlossaryKeys(allGlossaryKeys.filter((value) => value.id !== id));
    } else {
      setGlossaryKeys(allGlossaryKeys);
      setGlossaryKeys((prevItems) =>
        prevItems.filter((value) => id == value.id),
      );
    }
  };

  let onInputChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    async function fetchGlossary() {
      const data = await fetchData("src/assets/data/glossaire.json");

      // Create a new Map with the glossary data
      const map = new Map();
      for (const key in data) {
        map.set(key, data[key]);
      }

      const keys = [
        { id: "Tout afficher", name: "Tout afficher" },
        ...Array.from(map.keys()).map((key) => ({
          id: uuidv4(),
          name: key,
        })),
      ];

      setGlossaryMap(map);
      setGlossaryKeys(keys);
      setAllGlossaryKeys(keys);
    }

    fetchGlossary();
  }, []);

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
        <p>
          Clé : <b>{majorId}</b>
        </p>
        <p>
          Votre recherche : <b>{value}</b>{" "}
        </p>
        <ComboBox
          // onOpenChange
          direction="top"
          width="size-6000"
          maxWidth="100%"
          label="🔍 Trouver un terme"
          aria-label="Trouver un terme"
          items={allGlossaryKeys}
          autoFocus
          selectedKey={majorId}
          onSelectionChange={onSelectionChange}
          onInputChange={onInputChange ?? "Tout afficher"}
          contextualHelp={
            <ContextualHelp variant="info">
              <Heading>Trouver un terme</Heading>
              <Content>
                👉 Sélectionnez un terme dans la liste ci-dessous ou entrez un
                terme de recherche dans le champ de saisie pour trouver
                rapidement ce que vous cherchez.
              </Content>
            </ContextualHelp>
          }
        >
          {(item) => <Item key={item.id}>{item.name}</Item>}
        </ComboBox>
      </View>

      {/* Component GlossaryTerms */}
      {glossaryKeys.map((key) => {
        if (key.id !== "Tout afficher") {
          return (
            <Well
              key={key.id}
              role="glossaire"
              aria-labelledby={idGlossaryTerm}
            >
              <Heading level={3} id={idGlossaryTerm}>
                {key.name}
              </Heading>
              <Heading level={5}>Définition</Heading>
              <br />
              <Text>{glossaryMap.get(key.name)?.definition}</Text>
              <br />
              <Heading level={5}>Exemple</Heading>
              <br />

              <Text>{glossaryMap.get(key.name)?.example}</Text>
            </Well>
          );
        } else {
          return null;
        }
      })}
    </View>
  );
}
