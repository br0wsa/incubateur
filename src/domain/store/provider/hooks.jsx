import { useState } from "react";

import { THEMES, AUTH, STATUS } from "./states";

/**
 * Hook pour gérer le thème de l'application.
 * @returns {Object} - Un objet avec les propriétés theme et setTheme.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.light);
  return { theme, setTheme };
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

/**
 * Hook pour gérer le statut de l'utilisateur.
 * @returns {Object} - Un objet avec les propriétés status, setStatus, toggleAdmin, toggleSoftBanned, toggleUser.
 */
export const useStatus = () => {
  const [status, setStatus] = useState(STATUS);
  const { toggleAdmin, toggleSoftBanned, toggleUser } = status;
  return { status, setStatus, toggleAdmin, toggleSoftBanned, toggleUser };
};
