# Le domaine

Cette partie contient les règles métier et la logique de l'application. C'est le cœur fonctionnel de l'application et il est indépendant de toute infrastructure ou technologie spécifique. Dans ce dossier, vous mettriez toutes les classes qui définissent les entités, les services, les agrégats et les objets de valeur de votre domaine.

Contiendra toutes les classes qui définissent

- les entités,
- les services,
- les agrégats
- les objets de valeur de votre domaine.

## Les entités

Les entités sont des objets qui représentent les éléments clés du domaine de votre application, tels que les utilisateurs, les produits, les commandes, etc. Les entités ont une identité unique qui les distingue des autres entités, et elles peuvent être persistées dans une base de données ou dans une autre forme de stockage de données. Les entités encapsulent les données et les comportements liés à un élément du domaine et peuvent être manipulées par les services

`exemple :  une classe Product avec des attributs tels que id, name, description, price, etc.`

## Les services

Les services sont des objets qui encapsulent des comportements liés au domaine et qui peuvent être utilisés par différents éléments du système. Les services peuvent être utilisés pour effectuer des opérations complexes qui ne peuvent pas être effectuées par une seule entité ou agrégat. Les services sont souvent utilisés pour gérer la logique métier, tels que la gestion des commandes, la validation des données, etc.

`exemple : une classe OrderService qui expose des méthodes telles que placeOrder, cancelOrder, etc.`

## Les agrégats

Les agrégats sont des ensembles cohérents d'entités qui sont traitées comme une unité lors des opérations de lecture et d'écriture. Les agrégats sont des objets de haut niveau qui encapsulent la logique métier complexe et qui permettent de garantir la cohérence des données dans le domaine. Les agrégats peuvent contenir des entités et des objets de valeur, et ils sont souvent manipulés par les services

`exemple : une classe OrderAggregate qui contient des entités telles que Order, OrderItem, PaymentInfo, etc.`

## Les objets de valeur

Les objets de valeur sont des objets qui représentent des concepts spécifiques du domaine qui ne sont pas identifiés par une identité unique. Les objets de valeur sont généralement immuables et peuvent être utilisés pour représenter des valeurs comme des dates, des montants, des adresses, etc. Les objets de valeur sont souvent utilisés pour encapsuler la logique de calcul et de validation

`exemple : classe Address pourrait avoir des attributs tels que street, city, state, zip, etc., tandis que la classe Money pourrait avoir des attributs tels que amount, currency, etc.`
