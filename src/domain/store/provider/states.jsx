// Définition des valeurs par défaut des contextes
const STATUS_DEFAULT = {
  admin: false,
  softBanned: false,
  user: true,
};

const AUTH_DEFAULT = {
  isAuthenticated: true,
};

// Définition des actions pour les contextes
const AUTH_ACTION = {
  /**
   * Action de connexion d'un utilisateur.
   */
  login: () => setIsAuthenticated(true),

  /**
   * Action de déconnexion d'un utilisateur.
   */
  logout: () => setIsAuthenticated(false),
};

const STATUS_ACTIONS = {
  /**
   * Action pour basculer le statut admin d'un utilisateur.
   *
   * @param {Object} status - Le statut courant de l'utilisateur.
   * @returns {Object} Le nouveau statut de l'utilisateur.
   */
  toggleAdmin: (status) => ({
    ...status,
    admin: !status.admin,
    user: status.admin ? false : status.user,
  }),

  /**
   * Action pour basculer le statut softBanned d'un utilisateur.
   *
   * @param {Object} status - Le statut courant de l'utilisateur.
   * @returns {Object} Le nouveau statut de l'utilisateur.
   */
  toggleSoftBanned: (status) => ({
    ...status,
    softBanned: !status.softBanned,
    user: status.softBanned ? false : status.user,
  }),

  /**
   * Action pour basculer le statut user d'un utilisateur.
   *
   * @param {Object} status - Le statut courant de l'utilisateur.
   * @returns {Object} Le nouveau statut de l'utilisateur.
   */
  toggleUser: (status) => ({
    ...status,
    user: !status.user,
    softBanned: false,
    admin: false,
  }),
};

// Définition des constantes pour les contextes
/**
 * Les thèmes disponibles pour l'application.
 */
const THEMES = {
  light: "light",
  dark: "dark",
};

/**
 * Les valeurs initiales pour le contexte d'authentification.
 */
const AUTH = {
  ...AUTH_DEFAULT,
  ...AUTH_ACTION,
};

/**
 * Les valeurs initiales pour le contexte de statut de l'utilisateur.
 */
const STATUS = {
  ...STATUS_DEFAULT,
  ...STATUS_ACTIONS,
};

// Export des constantes
export { THEMES, AUTH, STATUS };
