import client from "../clients.json" assert { type: "json" };

class HotelService {
    getInfoAllClients() {
        return client;
    }

    FindClientByID(id) {
        return client.clients.find(client => client.id === parseInt(id));
    }

    AddClient() {
            return "Le client a bien été ajouté";
    }
    UpdateClient(id) {
        const EditClient = client.clients.find(EditClient => EditClient.id === parseInt(id));
        if (EditClient) {
            return "Les informations du client ont bien été modifiées";
        } else {
            return "Client non trouvé";
        }
    }
    DeleteClient(id) {
        const DeleteClient = client.clients.find(DeleteClient => DeleteClient.id === parseInt(id));
        if (DeleteClient) {
            return "Le client a bien été supprimé";
        } else {
            return "Client non trouvé";
        }
    }
}
export const hotelService = new HotelService();