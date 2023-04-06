// Import de React, qui est la bibliothèque de base de notre application
import React from "react";

// Import de ReactDOM, qui permet de manipuler l'arbre des composants React et de les afficher dans le navigateur
import ReactDOM from "react-dom/client";

// Import du fournisseur de l'application, qui permet de gérer l'état global de l'application et de le rendre accessible à tous les composants
import { AppProvider } from "../provider";

// Import du composant principal de l'application
import App from "./App";

// Rendu du composant racine de l'application, qui est enveloppé dans le fournisseur de l'application et inclus dans un mode strict
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
