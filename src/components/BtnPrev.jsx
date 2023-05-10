import React from "react";
import PropTypes from "prop-types";
import { Button } from "@adobe/react-spectrum";
import ArrowLeft from "@spectrum-icons/workflow/ArrowLeft";
import {
  ACTOR_DATA_TYPE,
  MOVIE_DATA_TYPE,
  SERIE_DATA_TYPE,
  LAST_RELEASE_DATA_TYPE,
  ANIMATION_DATA_TYPE,
  ANIMATION_LIKES,
  LAST_LIKES,
  MOVIE_LIKES,
  SERIE_LIKES,
  ACTOR_LIKES,
} from "../domain/redux/action-data";

/**
 * React component for a previous button that scrolls to the left
 * @param {object} props - The props object for the component
 * @param {string} props.dataType - The type of data being displayed on the page
 * @returns {JSX.Element} - The JSX element for the button
 */
function BtnPrev({ dataType }) {
  const handlePrev = () => {
    const container = document.getElementById(dataType);
    container.scrollBy({
      top: 0,
      left: -container.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <Button
      alignSelf="center"
      aria-label="précédent"
      variant="secondary"
      zIndex="3"
      left="size-0"
      position="sticky"
      minHeight="size-1250"
      width="size-450"
      onPress={handlePrev}
    >
      <ArrowLeft />
    </Button>
  );
}

BtnPrev.propTypes = {
  dataType: PropTypes.oneOf([
    ACTOR_DATA_TYPE,
    MOVIE_DATA_TYPE,
    SERIE_DATA_TYPE,
    LAST_RELEASE_DATA_TYPE,
    ANIMATION_DATA_TYPE,
    ANIMATION_LIKES,
    LAST_LIKES,
    MOVIE_LIKES,
    SERIE_LIKES,
    ACTOR_LIKES,
  ]).isRequired,
};

export default React.memo(BtnPrev);
