import hotels from '../hotel.json' assert { type: 'json' };

class ClientsService {
    getInfoHotel() {
        return hotels;
    }

    getAllRoom() {
        return hotels.rooms;
    }

    getIFindRoomByID(id) {
        return hotels.rooms.find(room => room.id === parseInt(id));
    }
    ReservationRoom(id) {
        const room = hotels.rooms.find(room => room.id === parseInt(id));
        if (room) {
            return "Votre chambre a bien été réservée";
        } else {
            return "Chambre non trouvée";
        }
    }
    DeleteReservationRoom(id) {
        const room = hotels.rooms.find(room => room.id === parseInt(id));
        if (room) {
            return "Votre réservation a bien été annulée";
        } else {
            return "Chambre non trouvée";
        }
    }
}

export const clientsService = new ClientsService();