import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import {
  Provider as SpectrumProvider,
  defaultTheme,
} from "@adobe/react-spectrum";
import store from "./src/domain/store/store.js";

export const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {/* Inclut le Provider Spectrum avec les propriétés récupérées */}
      <SpectrumProvider theme={defaultTheme}>{children}</SpectrumProvider>
    </ReduxProvider>
  );
};
