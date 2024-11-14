# Gestion-des-reclamations--Backend-
Application développée sous l'environnement Spring Boot et React.js, impliquant trois types d'utilisateurs principaux : l'administrateur, le gestionnaire et le client.
# Projet de Gestion des Réclamations

## Description
Ce projet consiste en une application web et mobile qui prend en charge la gestion des réclamations des clients pour un service spécifique. L'application permet aux clients de soumettre des réclamations, qui sont ensuite traitées par un manager. Le processus de traitement comprend trois états : "En cours de traitement", "Traitée et jointe à un commentaire" ou "Refusée avec un motif fourni par le manager".

Dans le rôle de supervision, l'administrateur gère les deux types d'utilisateurs (managers et clients). Il peut effectuer des opérations CRUD (Create, Read, Update, Delete) sur les deux types d'utilisateurs. De plus, l'administrateur peut contacter le manager via un bouton de messagerie intégré.

## Technologies Utilisées
- Backend: Spring Boot, MySQL
- Frontend: ReactJS
- Application Mobile: Flutter

## Captures d'écran
Login et Register:
![Sans titre](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/b6c80457-1223-461b-82a2-bd90e7a57a04)
![Sans titre-1](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/5b0988a6-6205-44e3-961a-41a75c0a6a3f)

Dashboard Manager :
   Stats :
![Sans titre-1](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/93634901-099f-41c3-b44b-8cb06029260b)

   Liste reclamations :
 
![Sans titre-1](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/118d8e92-f500-441d-b2e4-ba0bd8b07f19)

![Sans titre](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/45453e0a-1ef6-4622-bcb8-ae516adc3526)

   Affichage d'une reclamation chez manager: 
![Sans titre](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/95f77444-8a86-4687-ba67-63292c3bbc04)

   Contacter client :
![Sans titre](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/2aeaf754-4fcb-4f6f-b1fd-64104e622c0f)

   Interface Client : 
![Sans titre-1](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/d1f55771-f726-4545-b677-ff8fce264ec9)

   Interface Admin : 
![image](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/6b5f2d90-be60-49ab-8730-b699ac5d6b93)

   Profil Admin :
![image](https://github.com/NabilSas/Gestion-des-reclamations--Backend-/assets/101131509/ead82847-5698-4a84-880e-6c01c4a1f41f)



## Fonctionnalités
- Soumission des réclamations par les clients
- Traitement des réclamations par les managers avec trois états possibles (Traitée, rejetée, en cours de traitement )
- Gestion des utilisateurs (Manager,Client) par l'administrateur
- Communication entre l'administrateur et le manager et le manager avec le client via un système de messagerie intégré (Email.js)

## Installation
Assurez-vous d'avoir les logiciels suivants installés sur votre machine :
    JDK (Java Development Kit)
    Maven (pour la gestion des dépendances)
    Un IDE Java (comme IntelliJ IDEA ou Eclipse)
Commande :
git clone (https://github.com/NabilSas/Gestion-des-reclamations-Frontend.git)

Config : 
Assurez-vous que la configuration de votre base de données (dans le fichier application.properties ou application.yml) est correcte. Vous devrez créer la base de données manuellement.

Final command :
mvn spring-boot:run
## Remerciements

Un grand merci à tous les collaborateurs qui ont contribué à ce projet :

- **Abdelmonaim Erraji**: Pour sa contribution exceptionnelle dans le développement et la conception.
- **Anas Ouatil**: Pour son engagement et son travail acharné tout au long du processus.

J'apprécie chacune de vos contributions et suis ravi de collaborer ensemble.



