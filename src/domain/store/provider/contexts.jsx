import { createContext } from "react";

/**

Contexte pour le thème de l'application.
@type {React.Context}
*/
export const ThemeContext = createContext();
/**

Contexte pour l'authentification de l'utilisateur.
@type {React.Context}
*/
export const AuthContext = createContext();
/**

Contexte pour l'état du statut de l'utilisateur.
@type {React.Context}
*/
export const StatusContext = createContext();
