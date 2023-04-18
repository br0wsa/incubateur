import React, { useState } from "react";
import PropTypes from "prop-types";
import { THEMES, AUTH, STATUS } from "./states";

/**
 * Hook pour gérer le thème de l'application.
 * @returns {Object} - Un objet avec les propriétés theme et setTheme.
 */
export const useTheme = () => {
  const [theme, setTheme] = React.useState(THEMES.light);
  return { theme, setTheme };
};


useTheme.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  setTheme: PropTypes.func.isRequired,
};

/**
 * Hook pour gérer l'authentification de l'utilisateur.
 * @returns {Object} - Un objet avec les propriétés auth, setAuth, isAuthenticated, login, logout.
 */
export const useAuth = () => {
  const [auth, setAuth] = useState(AUTH);
  const { isAuthenticated, login, logout } = auth;
  return { auth, setAuth, isAuthenticated, login, logout };
};

useAuth.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }).isRequired,
  setAuth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

/**
 * Hook pour gérer le statut de l'utilisateur.
 * @returns {Object} - Un objet avec les propriétés status, setStatus, toggleAdmin, toggleSoftBanned, toggleUser.
 */
export const useStatus = () => {
  const [status, setStatus] = useState(STATUS);
  const { toggleAdmin, toggleSoftBanned, toggleUser } = status;
  return { status, setStatus, toggleAdmin, toggleSoftBanned, toggleUser };
};

useStatus.propTypes = {
  status: PropTypes.shape({
    toggleAdmin: PropTypes.func.isRequired,
    toggleSoftBanned: PropTypes.func.isRequired,
    toggleUser: PropTypes.func.isRequired,
  }).isRequired,
  setStatus: PropTypes.func.isRequired,
  toggleAdmin: PropTypes.func.isRequired,
  toggleSoftBanned: PropTypes.func.isRequired,
  toggleUser: PropTypes.func.isRequired,
};
