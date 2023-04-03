# Cinefile

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Application de partage de films et séries 🎥📺

Dans un monde digitalisé où les gens aiment partager leur passion via internet, la demande pour rechercher et parler de cinéma et séries est toujours à son top.

Le but de notre application est d'aider les (plus ou moins) passionnés de cinéma à rechercher des films ou des séries, à partager leurs découvertes, à donner leurs avis sur ceux-ci, et également à communiquer et discuter avec d'autres passionnés pour débattre et découvrir de nouvelles choses 🤝.

Pour cela, le but principal sera la recherche de film, non seulement par le nom mais aussi par les personnes travaillant dessus, par origine ou type, par utilisateur ayant recommandé ce film 🔍.

Également, chaque utilisateur pourra noter les films qu'il a vu (ou simplement spécifié qu'il l'a vu sans avoir à donner de note), avec la possibilité de laisser une critique écrite 📝.

Chaque page d’œuvre ou de personnalités devra également fournir un chat écrit pour permettre aux gens de communiquer entre eux 💬. Pour finir, nous voudrions également que les utilisateurs aient accès aux statistiques des autres utilisateurs (top 50, flop 50, top des pays dont les œuvres sont les plus vues, de même pour les genres, etc...), avec possibilité de cacher son profil si souhaité 📈.

## Technologies

Le projet sera en WebService, donc les Front et le Back seront séparés en deux serveurs:

### FrontEnd

- React JS ou TS
- Tailwind CSS comme framework CSS
- Headless UI en complément (pour les dropdown, modal, etc...)
- Heroicon pour les icons
- Formik/Yup pour la gestion de formulaire
- Redux ToolKit pour le store
- Ky pour les requêtes HTTP
- React Router pour le routing

### BackEnd

- node/express

Pour les films et séries, pour ne pas à avoir à les rentrer tous sur l'application, on utilisera l'api [TMDB](https://www.themoviedb.org/) directement pour la récupération de ceux-ci (donc rien ne sera enregistré sur la BDD).

La BDD sera en SQL

## Installation

Cinefile est une application React propulsée par Vite qui consomme une API pour afficher les films actuellement en cours de diffusion. Le projet utilise Redux Toolkit pour la gestion de l'état et Jest pour les tests unitaires.

Pour installer les dépendances, exécutez la commande suivante dans le répertoire racine du projet :

`yarn install`

## Dev

Pour lancer l'application en mode développement, exécutez la commande suivante :

`yarn dev`

Pour créer une version de production de l'application, exécutez la commande suivante :

`yarn build`

Pour exécuter les tests unitaires, exécutez la commande suivante :

`yarn test`

## Licence

Ce projet est soutenu par [1Formation-1Job](https://www.1formation-1job.com/), l'INCUBATEUR Pôle Emploi et la région Hauts-de-France.

Pour plus d'informations, contactez :

## Euratechnologies

- 4 avenue des Saules
- 59350 Lomme
- 06.22.23.46.08
- contact@1formation-1job.com`
