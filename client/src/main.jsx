import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage/HomePage';
import RoomDetails from './components/RoomDetails'; // Assurez-vous que ce composant est créé
import './index.css';

// Sélectionnez le conteneur où votre application sera attachée
const container = document.getElementById('root');

// Utilisez createRoot pour créer une racine pour votre application
const root = createRoot(container);

// Utilisez root.render pour rendre votre composant App
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="rooms/:id" element={<RoomDetails />} />
                    {/* Vous pouvez ajouter d'autres routes si nécessaire */}
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
