import { hotelService } from "../services/hotel.service.js";

class HotelController {

    FindInfoAllClients(req, res) {
        res.send(hotelService.getInfoAllClients());
    }
    FindClientByID(req, res) {
        const client = hotelService.FindClientByID(req.params.id);
        if (client) {
            res.send(client);
        } else {
            res.status(404).send("Client non trouvé");
        }
    }

    AddClient(req, res) {
        const client = hotelService.AddClient();
        if (client) {
            res.send(client);
        } else {
            res.status(404).send("Client non trouvé");
        }
    }
    UpdateClient(req, res) {
        const client = hotelService.UpdateClient(req.params.id);
        if (client) {
            res.send(client);
        } else {
            res.status(404).send("Client non trouvé");
        }
    }

    // annulation de la réservation
    DeleteClient(req, res) {
        const client = hotelService.DeleteClient(req.params.id);
        if (client) {
            res.send(client);
        } else {
            res.status(404).send("Client non trouvé");
        }
    }

}

export const hotelController = new HotelController();