import React, { useState, useEffect } from "react";

// Import fetch function from utils/fetchJson.js
import { fetchData } from "../utils/fetchJson";

// Import View component from Adobe Spectrum
import { View } from "@adobe/react-spectrum";

// Import GlossarySections, and GlossarySearch components
import { GlossarySections } from "../components/GlossarySections";
import { GlossarySearch } from "../components/GlossarySearch";

// Import uuidv4 function
import { v4 as uuidv4 } from "uuid";

export default function GlossaryLayout() {
  // Define state variables using useState hook
  const [glossaryMap, setGlossaryMap] = useState(new Map());
  const [glossaryKeys, setGlossaryKeys] = useState([]);
  const [allGlossaryKeys, setAllGlossaryKeys] = useState([]);

  // Define state variables using useState hook and default values
  const [value, setValue] = useState("Tout afficher");
  const [majorId, setMajorId] = useState("");

  // Define a function to handle changes in the dropdown menu
  const handleSelectionChange = (id) => {
    setMajorId(id);
    if (id === "Tout afficher") {
      setGlossaryKeys(allGlossaryKeys.filter((value) => value.id !== id));
    } else {
      setGlossaryKeys(allGlossaryKeys.filter((value) => id == value.id));
    }
  };

  // Define a function to handle changes in the search bar
  const handleInputChange = (value) => {
    setValue(value);
  };

  // Define a function to fetch the glossary data from the json file
  useEffect(() => {
    async function fetchGlossary() {
      // Call the fetchData function to get the data from the json file
      const data = await fetchData("glossaire.json");

      // Create a new Map with the glossary data
      const map = new Map();
      for (const key in data) {
        map.set(key, data[key]);
      }

      // Create an array of objects with id and name properties for each glossary term
      const keys = [
        { id: "Tout afficher", name: "Tout afficher" },
        ...Array.from(map.keys()).map((key) => ({
          id: uuidv4(),
          name: key,
        })),
      ];

      // Update the state variables with the glossary data
      setGlossaryMap(map);
      setGlossaryKeys(keys);
      setAllGlossaryKeys(keys);
    }

    // Call the fetchGlossary function when the component mounts
    fetchGlossary();
  }, []);

  // Render the GlossaryLayout component
  return (
    <View>
      {/* Render the GlossarySearch component */}
      <GlossarySearch
        majorId={majorId}
        value={value}
        allGlossaryKeys={allGlossaryKeys}
        handleSelectionChange={handleSelectionChange}
        handleInputChange={handleInputChange}
      />

      {/* Render the GlossarySections component */}
      <GlossarySections glossaryKeys={glossaryKeys} glossaryMap={glossaryMap} />
    </View>
  );
}
