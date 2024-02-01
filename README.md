# 🏨 Système de Réservation d'Hôtel

Ce projet est une API de réservation d'hôtel conçue pour permettre aux utilisateurs de gérer leurs séjours en toute simplicité. Elle permet de récupérer des informations sur l'hôtel, de lister les chambres disponibles, et offre aux administrateurs des outils pour gérer les clients et les réservations.

## Fonctionnalités 🌟

- 🏡 Récupération des informations de l'hôtel
- 🛌 Listage des chambres disponibles
- 📅 Réservation et annulation de chambres
- 👥 Gestion des clients (pour les administrateurs)
- 🔑 Authentification admin pour les opérations sensibles

## Démarrage Rapide 🚀

### Prérequis

- Node.js
- NPM

### Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/Vinybsqn/API.node.git
cd votre-repo
npm install

```

## Utilisation 🚀

Lancez le serveur de développement avec la commande suivante :

```bash
npm run dev
```
Naviguez vers http://localhost:3000 pour accéder à l'API.

## Points de terminaison de l'API 🗺️

### Utilisateurs

- `GET /api/hotel`: Obtenir les informations de l'hôtel.
    - Cette route permet aux utilisateurs d'accéder aux informations générales de l'hôtel, telles que le nom, l'adresse et les services disponibles.

- `GET /api/hotelRoom`: Obtenir toutes les chambres disponibles.
    - Utilisez cette route pour lister toutes les chambres de l'hôtel et leurs caractéristiques, comme le type de chambre, le prix et la disponibilité.

- `GET /api/hotelRoom/:id`: Obtenir les détails d'une chambre spécifique par son ID.
    - Pour obtenir des informations détaillées sur une chambre spécifique, utilisez cette route en remplaçant `:id` par l'ID réel de la chambre.

### Administrateurs 🔐

- `POST /api/admin/hotel/AddClient`: Ajouter un nouveau client (authentification requise).
    - Cette route permet aux administrateurs d'ajouter de nouveaux clients à la base de données de l'hôtel. L'authentification est requise pour accéder à cette fonctionnalité.

- `GET /api/admin/hotel/client`: Lister tous les clients (authentification requise).
    - Les administrateurs peuvent utiliser cette route pour obtenir une liste de tous les clients de l'hôtel. Une authentification est nécessaire pour garantir la sécurité des données.

- `GET /api/admin/hotel/client/:id`: Obtenir les informations d'un client spécifique par son ID (authentification requise).
    - Pour accéder aux informations détaillées d'un client spécifique, les administrateurs peuvent utiliser cette route en fournissant l'ID du client. L'authentification est requise.

## Sécurité 🔒

Les points de terminaison destinés aux administrateurs sont protégés par une authentification basique pour garantir que seuls les utilisateurs autorisés puissent accéder à ces informations sensibles. Pour accéder à ces routes :

- Fournissez les identifiants administrateur appropriés dans l'en-tête `Authorization` de votre requête.
- Utilisez le format `Basic <encoded_credentials>`, où `<encoded_credentials>` est votre nom d'utilisateur et votre mot de passe concaténés par un `:`, puis encodés en base64.

Par exemple, si votre nom d'utilisateur est `admin` et votre mot de passe `password`, vous devrez encoder `admin:password` en base64 et l'ajouter à l'en-tête `Authorization` de votre requête HTTP.

## Contribution 🤝

Nous accueillons chaleureusement les contributions de la communauté ! Si vous avez des idées ou des propositions d'amélioration, n'hésitez pas à participer. Votre engagement contribue grandement à l'enrichissement de ce projet. Voici comment vous pouvez contribuer :

### Soumettre des Pull Requests

1. **Fork** le dépôt sur GitHub.
2. **Clone** le projet sur votre machine locale.
3. **Créez** une nouvelle branche pour vos modifications.
4. **Commit** vos changements en suivant les bonnes pratiques de nommage des commits.
5. **Push** votre branche sur votre fork.
6. Soumettez une **Pull Request** pour que vos modifications soient examinées et éventuellement intégrées au projet principal.

### Ouvrir des Issues

Si vous rencontrez des bugs, si vous avez des questions ou si vous souhaitez suggérer de nouvelles fonctionnalités, n'hésitez pas à ouvrir des **Issues** sur GitHub. Voici quelques conseils pour ouvrir une issue :

- **Vérifiez** d'abord que l'issue n'a pas déjà été signalée ou résolue.
- **Utilisez un titre clair et descriptif** pour votre issue pour aider les autres contributeurs à comprendre le problème rapidement.
- **Décrivez en détail** le problème que vous rencontrez, y compris les étapes pour le reproduire. Si possible, incluez des captures d'écran ou des extraits de code.
- **Proposez une solution** si vous en avez une en tête. Cela peut aider à accélérer le processus de résolution.

Votre participation est très appréciée, et chaque contribution rend le projet plus fort et plus utile pour la communauté.


