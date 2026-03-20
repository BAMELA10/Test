# Gestion Pesée - Dashboard

Application web full-stack Node.js/Express pour la gestion des pesées ferroviaires.

## Fonctionnalités
- CRUD Users, Profils, Clients, Chargeurs, Destinations, Consignes, Wagons
- Gestion pesées par train/wagon avec calculs poids net/brut
- Interface moderne avec tables dynamiques et formulaires d'ajout

## Prérequis
- Node.js ≥ 18
- Base MSSQL (Azure SQL ou local)
- Fichier `.env` configuré

## Installation
```bash
npm install
```

## Configuration
Créez `.env` :
```
DATABASE_NAME=votre_db
DATABASE_USER=votre_user
DATABASE_PASSWORD=votre_pass
HOST=votre_host
DATABASE_PORT=1433
PORT=3002
```

## Lancement
```bash
npm start
```
Ou :
```bash
node server.js
```

**Serveur démarré sur** `http://localhost:${PORT}` (défaut 3002)

## Usage
1. Ouvrez `http://localhost:3002`
2. Naviguez sections (Users → + Ajouter User, etc.)
3. Ajoutez entités via formulaires
4. Listes se mettent à jour automatiquement
5. Pesées : Sélectionnez train → Ajouter Pesée → Wagons dynamiques

## Structure
```
├── controller/     # Logique métier
├── model/          # Sequelize models
├── db/             # Connexion MSSQL
├── public/         # Frontend HTML/CSS/JS
├── router/         # Routes API
├── seeds/          # Données initiales
├── server.js       # Serveur Express
└── package.json
```

## API Endpoints
- `GET /api/[entity]` : Liste (user, profil, client...)
- `POST /api/[entity]` : Créer
- `GET /api/pesee/:train` : Détails pesée train
- `POST /api/pesee` : Créer pesée

## Débogage
Logs console pour requêtes/DB. MSSQL logging désactivé.

## Dépendances
Express, Sequelize, bcrypt, dotenvs
