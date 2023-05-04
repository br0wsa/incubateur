/**
 * GlossaryLayout est un composant React qui affiche un glossaire.
 * @module GlossaryLayout
 */

import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchJson";
import { View } from "@adobe/react-spectrum";
import { GlossarySections } from "../components/GlossarySections";
import { GlossarySearch } from "../components/GlossarySearch";
import { v4 as uuidv4 } from "uuid";

export default function GlossaryLayout() {
  const [glossaryMap, setGlossaryMap] = useState(new Map());
  const [glossaryKeys, setGlossaryKeys] = useState([]);
  const [allGlossaryKeys, setAllGlossaryKeys] = useState([]);
  const [value, setValue] = useState("Tout afficher");
  const [majorId, setMajorId] = useState("");

  const handleSelectionChange = (id) => {
    setMajorId(id);
    if (id === "Tout afficher") {
      setGlossaryKeys(allGlossaryKeys.filter((value) => value.id !== id));
    } else {
      setGlossaryKeys(allGlossaryKeys.filter((value) => id == value.id));
    }
  };

  const handleInputChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    async function fetchGlossary() {
      const data = await fetchData("glossaire.json");
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
      <GlossarySearch
        majorId={majorId}
        value={value}
        allGlossaryKeys={allGlossaryKeys}
        handleSelectionChange={handleSelectionChange}
        handleInputChange={handleInputChange}
      />

      <GlossarySections glossaryKeys={glossaryKeys} glossaryMap={glossaryMap} />
    </View>
  );
}
