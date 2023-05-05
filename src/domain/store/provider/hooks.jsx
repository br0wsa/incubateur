import React, { useState } from "react";
import PropTypes from "prop-types";
import { THEMES } from "./states";

/**
 * Hook pour gérer le thème de l'application.
 *
 * @returns {Object} - Un objet avec les propriétés theme et setTheme.
 */
export const useTheme = () => {
  const [theme, setTheme] = React.useState(THEMES.dark);

  return { theme, setTheme };
};

useTheme.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  setTheme: PropTypes.func.isRequired,
};

/**
 * Hook pour gérer l'authentification de l'utilisateur.
 *
 * @returns {Object} - Un objet avec les propriétés auth, setAuth, isAuthenticated, login, logout.
 */
/**
 * Gestion de l'authentification d'un utilisateur.
 * @returns {Object} - Objet contenant les fonctions et états relatifs à l'authentification.
 */
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [pseudo, setPseudo] = useState("mon pseudo à renseigner");
  const [email, setEmail] = useState("mon email à renseigner");

  /**
   * Connecte un utilisateur avec un pseudo et un email donné.
   *
   * @param {string} pseudoValue - Le nouveau pseudo de l'utilisateur.
   * @param {string} emailValue - Le nouvel email de l'utilisateur.
   */
  const login = (pseudoValue, emailValue) => {
    setIsAuthenticated(true);
    setPseudo(pseudoValue);
    setEmail(emailValue);
  };

  /**
   * Déconnecte l'utilisateur.
   */
  const logout = () => {
    setIsAuthenticated(false);
    setPseudo("");
    setEmail("");
  };

  /**
   * Modifie l'email de l'utilisateur.
   *
   * @param {string} newEmail - Le nouvel email de l'utilisateur.
   */
  const modifyUserEmail = (newEmail) => {
    setEmail(newEmail);
  };

  /**
   * Modifie le pseudo de l'utilisateur.
   *
   * @param {string} newPseudo - Le nouveau pseudo de l'utilisateur.
   */
  const modifyUserPseudo = (newPseudo) => {
    setPseudo(newPseudo);
  };

  return {
    isAuthenticated,
    pseudo,
    email,
    login,
    logout,
    modifyUserEmail,
    modifyUserPseudo,
  };
};

/**
 * Hook pour gérer le statut de l'utilisateur.
 *
 * @returns {Object} - Un objet avec les propriétés status, setStatus, toggleAdmin, toggleSoftBanned, toggleUser.
 */
export const useStatus = () => {
  const [status, setStatus] = useState({
    admin: false,
    softBanned: false,
    user: true,
  });

  /**
   * Active ou désactive le statut administrateur.
   */
  const toggleAdmin = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      admin: true,
      user: prevStatus.user ? false : prevStatus.user,
      softBanned: prevStatus.softBanned ? false : prevStatus.softBanned,
    }));
  };

  /**
   * Active ou désactive le statut de bannissement doux.
   */
  const toggleSoftBanned = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      softBanned: true,
      user: prevStatus.user ? false : prevStatus.user,
      admin: prevStatus.admin ? false : prevStatus.admin,
    }));
  };

  /**
   * Active ou désactive le statut d'utilisateur.
   */
  const toggleUser = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      user: true,
      softBanned: false,
      admin: false,
    }));
  };

  return { status, toggleAdmin, toggleSoftBanned, toggleUser };
};
