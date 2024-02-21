import express from 'express';
import { router as clientsRoutes } from './routes/clients.route.js';
import { router as hotelRoutes } from './routes/hotel.route.js';
import cors from 'cors';

const app = express(); // Initialisez 'app' avant d'utiliser 'app.use()'
const PORT = 3000;

// Utilisez les middlewares CORS et pour parser le body des requêtes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisez les routes
app.use('/api', clientsRoutes);
app.use('/api/admin', hotelRoutes);

// Démarrez le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
