import React, { lazy, Suspense, useState } from "react";
import PropTypes from "prop-types";

// ErrorBoundary: react-error-boundary to handle errors in components
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";

import { Flex } from "@adobe/react-spectrum";

// uuidv4 for generating unique keys
import { v4 as uuidv4 } from "uuid";

// components
import ProgressCircle from "../components/ProgressCircle";
const LazyCineCardProvider = lazy(() => import("./CineCardProvider"));
import ButtonNext from "../components/BtnNext";
import ButtonPrev from "../components/BtnPrev";

import useDataSelector from "../utils/useDataSelector";

function CardsLayout({ dataType }) {
  const { render, dataTypeForLayout } = useDataSelector(dataType);

  return (
    <Flex
      marginY="size-400"
      id={dataType}
      top="size-0"
      direction="row"
      wrap="nowrap"
      columnGap="size-400"
      width="100%"
      justifyContent="start"
      alignItems="start"
      UNSAFE_style={{
        overflowX: "auto",
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {dataTypeForLayout.length > 2 && <ButtonPrev dataType={dataType} />}
      {dataTypeForLayout.length > 0 &&
        dataTypeForLayout?.map((item) => (
          <ErrorBoundary key={uuidv4()} fallbackRender={ErrorFallback}>
            <Suspense
              fallback={
                <ProgressCircle
                  aria-label={"chargement des données"}
                  isIndeterminate
                />
              }
            >
              {((item.posterPath && item.title) ||
                (item.profilePath && item.name) ||
                (item.posterPath && item.name)) && (
                <LazyCineCardProvider key={uuidv4()} render={render(item)} />
              )}
            </Suspense>
          </ErrorBoundary>
        ))}
      {dataTypeForLayout.length > 2 && <ButtonNext dataType={dataType} />}
    </Flex>
  );
}

// Prop types validation for the dataType prop
CardsLayout.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default CardsLayout;
