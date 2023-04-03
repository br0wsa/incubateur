import React from "react";
import { Provider } from "react-redux";
import store from "./src/domain/store/store.js";

export const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
