import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

// ErrorBoundary: react-error-boundary to handle errors in components
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";

// Grid component from Adobe React Spectrum
import { Grid } from "@adobe/react-spectrum";
// uuidv4 for generating unique keys
import { v4 as uuidv4 } from "uuid";

// components
import ProgressCircle from "../components/ProgressCircle";
// Lazy loading of the CineCardProvider component
const LazyCineCardProvider = lazy(() => import("./CineCardProvider"));

import useDataSelector from "../utils/useDataSelector";
import useInfiniteScroll from "../utils/useInfiniteScroll";

function CardsLayout({ dataType }) {
  // customs Hooks
  const { render, dataTypeForLayout } = useDataSelector(dataType);
  const { isLoading } = useInfiniteScroll(dataType);

  // Sets the column sizes for different screen sizes
  const columnSizes = {
    XS: ["1fr", "1fr"],
    S: ["1fr", "1fr", "1fr", "1fr"],
    M: ["1fr", "1fr", "1fr", "1fr"],
    L: ["1fr", "1fr", "1fr", "1fr"],
    XL: ["1fr", "1fr", "1fr", "1fr"],
    XXL: ["1fr", "1fr", "1fr", "1fr"],
  };

  // Returns the Grid component with the selected data mapped to Card components
  return (
    <Grid
      columns={columnSizes}
      autoRows="size-3000"
      gap="size-300"
      justifyItems="center"
      alignItems="center"
      justifyContent="space-between"
      alignContent="space-between"
      marginTop="size-200"
      marginBottom="size-200"
    >
      {dataTypeForLayout.map((item) => (
        <ErrorBoundary key={uuidv4()} fallbackRender={ErrorFallback}>
          <Suspense
            fallback={
              <ProgressCircle
                aria-label={isLoading && "chargement des données"}
                isIndeterminate
              />
            }
          >
            <LazyCineCardProvider
              key={uuidv4()}
              render={render(item)}
              idItem={item.id}
            />
          </Suspense>
        </ErrorBoundary>
      ))}
    </Grid>
  );
}

// Prop types validation for the dataType prop
CardsLayout.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default CardsLayout;
