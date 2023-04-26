import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  View,
  ComboBox,
  ContextualHelp,
  Heading,
  Content,
  Item,
} from "@adobe/react-spectrum";

export const GlossarySearch = React.memo(
  ({
    majorId,
    value,
    allGlossaryKeys,
    handleSelectionChange,
    handleInputChange,
  }) => {
    const onSelectionChange = useCallback(
      (selectedKey) => {
        if (handleSelectionChange) {
          handleSelectionChange(selectedKey);
        }
      },
      [handleSelectionChange],
    );

    const onInputChange = useCallback(
      (inputValue) => {
        if (handleInputChange) {
          handleInputChange(inputValue);
        }
      },
      [handleInputChange],
    );

    return (
      <>
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
            direction="top"
            width="size-6000"
            maxWidth="100%"
            label="🔍 Trouver un terme"
            aria-label="Trouver un terme"
            items={allGlossaryKeys}
            autoFocus
            selectedKey={majorId}
            onSelectionChange={onSelectionChange}
            onInputChange={onInputChange}
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
      </>
    );
  },
);

GlossarySearch.propTypes = {
  majorId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  allGlossaryKeys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleSelectionChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
