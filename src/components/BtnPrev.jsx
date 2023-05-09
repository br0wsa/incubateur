import React from "react";
import PropTypes from "prop-types";
import { Button } from "@adobe/react-spectrum";
import ArrowLeft from "@spectrum-icons/workflow/ArrowLeft";

/**
 * React component for a previous button that scrolls to the left
 * @param {object} props - The props object for the component
 * @param {string} props.dataType - The type of data being displayed on the page
 * @returns {JSX.Element} - The JSX element for the button
 */
export default function BtnNext({ dataType }) {
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
      aria-label="précédent"
      variant="secondary"
      zIndex="3"
      left="size-0"
      position="sticky"
      height="size-1000"
      width="size-400"
      onPress={handlePrev}
    >
      <ArrowLeft />
    </Button>
  );
}

BtnNext.propTypes = {
  dataType: PropTypes.oneOf([
    "lastReleases",
    "movies",
    "animations",
    "series",
    "actors",
  ]).isRequired,
};
