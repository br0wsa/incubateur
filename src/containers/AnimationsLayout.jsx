import React from "react";
import { Heading, Text, Divider } from "@adobe/react-spectrum";
import CardsLayout from "../containers/CardsLayout";
import PropTypes from "prop-types";

/**
 * Layout pour afficher la liste des films d'animation
 * @function AnimationsLayout
 * @param {string} dataType - Le type de données à afficher ("popular" ou "top_rated")
 * @returns {JSX.Element} Composant react qui affiche la liste des films d'animation
 */
export default function AnimationsLayout({ dataType }) {
  return (
    <>
      <Heading level={2}>Animations</Heading>
      <Divider size="S" marginY="size-100" />
      <Text>
        Retrouvez les films d'animation qui ont fait vibrer votre enfance et
        ceux qui continuent de faire rêver les plus jeunes.
      </Text>
      <CardsLayout dataType={dataType} />
    </>
  );
}

// PropTypes
AnimationsLayout.propTypes = {
  dataType: PropTypes.oneOf(["popular", "top_rated"]).isRequired,
};
