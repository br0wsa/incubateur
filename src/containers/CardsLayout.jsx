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
import { CardConfigs } from "../components/CardConfigs";
import ProgressCircle from "../components/ProgressCircle";
// Lazy loading of the CineCardProvider component
const LazyCineCardProvider = lazy(() => import("./CineCardProvider"));

// redux
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function CardsLayout({ dataType }) {
  // Selects the render method in the CardConfigs object at dataType key.
  const { render } = CardConfigs[dataType];

  // Retrieves dynamic selected data from the Redux store using the useSelector hook with shallowEqual to compare the selected data from the store.
  const sliceConfig = {
    lastReleases: useSelector(
      (state) => state.lastRealease[dataType],
      shallowEqual,
    ),
    movies: useSelector((state) => state.movie[dataType], shallowEqual),
    animations: useSelector((state) => state.animation[dataType], shallowEqual),
    series: useSelector((state) => state.serie[dataType], shallowEqual),
    actors: useSelector((state) => state.actor[dataType], shallowEqual),
  };

  const dataTypeForLayout = sliceConfig[dataType];

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
            fallback={<ProgressCircle aria-label="Loading…" isIndeterminate />}
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
