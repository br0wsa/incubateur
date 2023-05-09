import React from "react";
import { Heading, Text, Divider } from "@adobe/react-spectrum";
import CardsLayout from "../containers/CardsLayout";
import PropTypes from "prop-types";

/**
 * Layout pour afficher la liste des artistes
 * @function ArtistsLayout
 * @param {string} dataType - Le type de données à afficher ("actors" ou "directors")
 * @returns {JSX.Element} Composant react qui affiche la liste des artistes
 */
export default function ArtistsLayout({ dataType }) {
  return (
    <>
      <Heading level={2}>Les artistes</Heading>
      <Divider size="S" marginY="size-100" />
      <Text>
        Explorez la filmographie des acteurs les plus talentueux et les plus
        charismatiques de l'industrie cinématographique.
      </Text>
      <CardsLayout dataType={dataType} />
    </>
  );
}

// PropTypes
ArtistsLayout.propTypes = {
  dataType: PropTypes.oneOf(["actors"]).isRequired,
};
