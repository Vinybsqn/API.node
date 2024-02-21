import React, { useEffect, useState } from 'react';
import RoomCard from './../RoomCard'; // Assurez-vous que ce composant existe

const HomePage = () => {
    const [rooms, setRooms] = useState([]); // Ce state stockera les chambres chargées depuis l'API

    useEffect(() => {
        // Remplacez 'URL_API' par l'URL réelle de votre serveur back-end
        fetch('http://localhost:3000/api/client/hotelRoom')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setRooms(data)) // Stockez les données dans le state 'rooms'
            .catch((error) => console.error('Error:', error)); // Loguez les erreurs s'il y en a
    }, []); // Le tableau vide indique que cet effet ne dépend d'aucune valeur et ne s'exécutera qu'une fois

    return (
        <div>
            <h1>Liste des Chambres</h1>
            <div>
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} /> // Affichez chaque chambre en utilisant RoomCard
                ))}
            </div>
        </div>
    );
};

export default HomePage;
