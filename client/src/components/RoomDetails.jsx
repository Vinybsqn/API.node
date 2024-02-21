import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './../RoomDetails.css'; // Importez votre fichier CSS pour les styles personnalisés

const RoomDetails = () => {
    const [room, setRoom] = useState(null);
    const [reservationSuccess, setReservationSuccess] = useState(false); // État pour le message de succès
    const { id } = useParams(); // Récupère l'ID de la chambre depuis l'URL

    useEffect(() => {
        // Assurez-vous que l'URL est correcte et que votre serveur back-end fonctionne comme prévu
        fetch(`http://localhost:3000/api/client/hotelRoom/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setRoom(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    // Fonction pour gérer la réservation de la chambre
    const handleReservation = (roomId) => {
        // Mettez ici le code pour gérer la réservation de la chambre
        console.log(`Réservation de la chambre ${roomId}`);
        // Mettez à jour l'état pour afficher le message de succès
        setReservationSuccess(true);
    };

    if (!room) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="room-details-container">
            <Link to="/" className="back-to-home-link">Retour</Link>
            <h2>{room.name}</h2>
            <p><strong>Numéro de la chambre :</strong> {room.number}</p>
            <p><strong>Description :</strong> {room.description}</p>
            <p><strong>Capacité :</strong> {room.capacity} personnes</p>
            <p><strong>Prix :</strong> {room.price} € par nuit</p>
            <button onClick={() => handleReservation(room.id)}>Réserver</button>
            {reservationSuccess && <p className="reservation-success-message">Réservation réussie !</p>} {/* Affiche le message de succès */}
        </div>
    );
};

export default RoomDetails;
