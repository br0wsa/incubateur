import React from "react";
import { Heading, Text, Divider } from "@adobe/react-spectrum";
import CardsLayout from "../containers/CardsLayout";
import PropTypes from "prop-types";

/**
 * Layout pour afficher la liste des films
 * @function MoviesLayout
 * @param {string} dataType - Le type de données à afficher ("popular" ou "upcoming")
 * @returns {JSX.Element} Composant react qui affiche la liste des films
 */
export default function MoviesLayout({ dataType }) {
  return (
    <>
      <Heading level={2}>Films</Heading>
      <Divider size="S" marginY="size-100" />
      <Text>Du cinéma d'auteur aux blockbusters...</Text>
      <CardsLayout dataType={dataType} />
    </>
  );
}

// PropTypes
MoviesLayout.propTypes = {
  dataType: PropTypes.oneOf(["movies"]).isRequired,
};
