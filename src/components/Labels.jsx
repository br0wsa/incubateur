import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@adobe/react-spectrum";
import { Content, ContextualHelp, Heading, View } from "@adobe/react-spectrum";
import { ToggleButton } from "@react-spectrum/button";

export default function Labels() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  const handleItemPress = (path, category) => {
    navigate(path);
    setSelected(category);
  };

  return (
    <View>
      <Flex
        alignItems="center"
        justifyContent="center"
        marginTop="size-50"
        wrap={{
          XS: "wrap-reverse",
        }}
      >
        <ToggleButton
          variant="cta"
          isSelected={selected === "Films"}
          onPress={() => handleItemPress("/movie", "Films")}
          aria-label="Films"
          margin="size-50"
        >
          Films
        </ToggleButton>
        <ToggleButton
          variant="cta"
          isSelected={selected === "Artistes"}
          onPress={() => handleItemPress("/actor", "Artistes")}
          aria-label="Artistes"
          margin="size-50"
        >
          Artistes
        </ToggleButton>
        <ToggleButton
          variant="cta"
          isSelected={selected === "Animations"}
          onPress={() => handleItemPress("/animation", "Animations")}
          aria-label="Animations"
          margin="size-50"
        >
          Animations
        </ToggleButton>
        <ToggleButton
          variant="cta"
          isSelected={selected === "Séries"}
          onPress={() => handleItemPress("/tv", "Séries")}
          aria-label="Séries"
          margin="size-50"
        >
          Séries
        </ToggleButton>
        <ContextualHelp>
          <Heading>🧭 Rechercher par étiquette</Heading>
          <Content>
            Les étiquette vous permettent de naviguer entre différentes
            catégories pour affiner votre recherche. Chaque étiquette représente
            une catégorie différente, comme les Films, les Artistes, les
            Animations ou encore les Séries. En cliquant dessus, vous afficherez
            les résultats correspondants à cette catégorie.
          </Content>
        </ContextualHelp>
      </Flex>
    </View>
  );
}
