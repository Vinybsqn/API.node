import { clientsController } from "../controllers/clients.controller.js"
import express from "express";

export const router = express.Router();

router.get(
    '/client/hotel',(req, res, next) => {
        clientsController.FindInfoHotel(req, res);
        next();
    });
router.get(
    '/client/hotelRoom', (req, res, next) => {
        clientsController.FindAllRoom(req, res);
        next();
    });
router.get(
    '/client/hotelRoom/:id', (req, res, next) => {
        clientsController.FindRoomByID(req, res);
        next();
    });
router.post(
    '/client/ReservationRoom/:id', (req, res, next) => {
        clientsController.ReservationRoom(req, res);
        next();
    });
router.post(
    '/client/DeleteReservationRoom/:id', (req, res, next) => {
        clientsController.DeleteReservationRoom(req, res);
        next();
    });

