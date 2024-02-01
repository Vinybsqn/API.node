import { clientsService } from "../services/clients.service.js"

class ClientsController {
    FindInfoHotel(req, res){
        return (
            res.send(clientsService.getInfoHotel())
        )
    }

    FindAllRoom(req, res) {
        res.send(clientsService.getAllRoom())
    }

    FindRoomByID(req, res) {
        const room = clientsService.getIFindRoomByID(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }

    ReservationRoom(req, res) {
        const room = clientsService.ReservationRoom(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }

    //annulation de la réservation
    DeleteReservationRoom(req, res) {
        const room = clientsService.DeleteReservationRoom(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }
}

export const clientsController = new ClientsController();