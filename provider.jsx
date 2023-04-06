// React core library
import React from "react";

// Redux Provider && Redux store
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/domain/store/store.js";
import { customTheme } from "./src/assets/customTheme.js";

// Adobe Spectrum Provider && Default Spectrum theme
import { Provider as SpectrumProvider } from "@adobe/react-spectrum";

export const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <SpectrumProvider theme={customTheme}>{children}</SpectrumProvider>
    </ReduxProvider>
  );
};
