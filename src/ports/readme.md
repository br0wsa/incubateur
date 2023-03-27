# Les ports

Cette partie définit les interfaces du domaine, ce qui permet aux adaptateurs de communiquer avec lui. Les ports peuvent être considérés comme des points d'entrée et de sortie de l'application. Dans ce dossier, vous mettriez toutes les classes qui définissent les interfaces à travers lesquelles les adaptateurs peuvent communiquer avec le domaine

## Les ports peuvent être divisés en deux catégories principales

### 1. Les ports entrants

ces ports sont utilisés pour recevoir des données ou des requêtes à partir de l'extérieur de votre application. Ils sont définis par des interfaces de service, qui décrivent les méthodes que les parties externes peuvent appeler pour demander des informations ou des actions de votre application. Les ports entrants peuvent être implémentés par des adaptateurs ou des composants externes, tels que des clients web, des API externes, etc. Les ports entrants sont souvent implémentés par les classes dans le package input.

### 2.Les ports sortants

ces ports sont utilisés pour envoyer des données ou des événements vers l'extérieur de votre application. Ils sont définis par des interfaces de rappel ou d'écoute, qui décrivent les méthodes que votre application peut appeler pour envoyer des informations ou des événements à des parties externes. Les ports sortants peuvent être implémentés par des adaptateurs ou des composants externes, tels que des systèmes de messagerie, des bases de données, des services web, etc. Les ports sortants sont souvent implémentés par les classes dans le package output.

---

En utilisant des interfaces pour définir les ports, votre application peut être testée de manière isolée, en simulant les appels aux ports avec des objets de test. Cela facilite la mise en place de tests automatisés pour votre application, en réduisant les dépendances sur des technologies externes.

En résumé, les ports sont des points d'entrée et de sortie pour votre application, définis par des interfaces qui décrivent les méthodes que les parties externes peuvent appeler pour interagir avec votre application. Les ports entrants reçoivent des données et des requêtes de l'extérieur, tandis que les ports sortants envoient des données et des événements vers l'extérieur.
