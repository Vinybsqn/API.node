import React from 'react';
import { Link } from 'react-router-dom';
import './../RoomCard.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const RoomCard = ({ room }) => {
    return (
        <div className="room-card">
            <h3>Chambre {room.id}</h3>
            <img className="room-image" src={`/images/chambres/${room.number}.jpg`} alt={`Chambre ${room.number}`} />
            <p>{room.description}</p>
            <Link to={`/rooms/${room.id}`}>Voir plus</Link>
        </div>
    );
};

export default RoomCard;
