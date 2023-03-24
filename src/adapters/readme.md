# Les adaptateurs

Cette partie fournit les interfaces pour communiquer avec l'application, notamment les interfaces utilisateur, les API, les bases de données, les file d'attente, etc. Dans ce dossier, vous mettriez toutes les classes qui se chargent d'interfacer avec des technologies externes

Contiendra toutes les classes qui interagissent avec des technologies externes telles que

- les interfaces utilisateur,
- les API,
- les bases de données,
- les file d'attente,
- etc

## Les adaptateurs de persistance

ces adaptateurs permettent de stocker et de récupérer des données dans une base de données ou un système de fichiers. Ils encapsulent les détails de l'implémentation de ces technologies, tels que les requêtes SQL, les connexions réseau, etc.

`exemple : Les adaptateurs de persistance peuvent inclure des classes telles que UserRepository, ChatRoomRepository, etc.`

## Les adaptateurs d'interface utilisateur

ces adaptateurs permettent d'afficher des informations à l'utilisateur et de recevoir des interactions de sa part. Ils encapsulent les détails de l'implémentation des technologies d'interface utilisateur, telles que React ou Vue.js.

`exemple : Les adaptateurs d'interface utilisateur peuvent inclure des composants React ou Vue.js, tels que UserList, ChatRoomList, etc.`

## Les adaptateurs de service

ces adaptateurs permettent d'appeler des services externes, tels que des API ou des services web. Ils encapsulent les détails de l'implémentation de ces services, tels que les appels réseau, les protocoles de communication, etc.

`exemple : Les adaptateurs de service peuvent inclure des classes telles que ChatServiceAPI, NotificationService, etc.`

## Les adaptateurs de file d'attente

ces adaptateurs permettent d'envoyer et de recevoir des messages dans une file d'attente, telle que RabbitMQ ou Kafka. Ils encapsulent les détails de l'implémentation de ces technologies, tels que les connexions réseau, les protocoles de communication, etc.

`exemple : Les adaptateurs de file d'attente peuvent inclure des classes telles que MessageQueueProducer, MessageQueueConsumer, etc.`
