import React from "react";
import { Heading, Text, Divider } from "@adobe/react-spectrum";
import CardsLayout from "../containers/CardsLayout";
import PropTypes from "prop-types";

/**
 * Layout pour afficher la liste des séries
 * @function SeriesLayout
 * @param {string} dataType - Le type de données à afficher ("popular" ou "top_rated")
 * @returns {JSX.Element} Composant react qui affiche la liste des séries
 */
export default function SeriesLayout({ dataType }) {
  return (
    <>
      <Heading level={2}>Séries</Heading>
      <Divider size="S" marginY="size-100" />
      <Text>
        Découvrez les séries les plus populaires ou les mieux notées...
      </Text>
      <CardsLayout dataType={dataType} />
    </>
  );
}

// PropTypes
SeriesLayout.propTypes = {
  dataType: PropTypes.oneOf(["series"]).isRequired,
};
