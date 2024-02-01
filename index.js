import express from 'express';
import { router as clientsRoutes } from './routes/clients.route.js';
import { router as hotelRoutes } from './routes/hotel.route.js';

const app = express();
const PORT = 3000;

app.use('/api', clientsRoutes);
app.use('/api/admin', hotelRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
