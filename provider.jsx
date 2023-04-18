// REACT
import React from "react";
import PropTypes from "prop-types";

// PROVIDER
import { Provider as ReduxProvider } from "react-redux";
import { Provider as SpectrumProvider } from "@adobe/react-spectrum";
import { customTheme } from "./src/assets/customTheme.js";
import store from "./src/domain/store/store.js";

// HOME MADE HOOKS
import {
  useTheme,
  useAuth,
  useStatus,
} from "./src/domain/store/provider/hooks";

// REACT CONTEXTS
import {
  ThemeContext,
  AuthContext,
  StatusContext,
} from "./src/domain/store/provider/contexts.jsx";

export const AppProvider = ({ children }) => {
  const auth = useAuth();
  const status = useStatus();
  const theme = useTheme();

  return (
    <AuthContext.Provider value={auth}>
      <StatusContext.Provider value={status}>
        <ThemeContext.Provider value={theme}>
          <ReduxProvider store={store}>
            <SpectrumProvider
              theme={customTheme}
              colorScheme={theme.theme}
              breakpoints={{
                XS: 200,
                S: 640,
                M: 768,
                L: 1024,
                XL: 1280,
                XXL: 1536,
              }}
            >
              {children}
            </SpectrumProvider>
          </ReduxProvider>
        </ThemeContext.Provider>
      </StatusContext.Provider>
    </AuthContext.Provider>
  );
};

// Add the propTypes
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
