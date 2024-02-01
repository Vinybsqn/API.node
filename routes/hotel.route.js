import { hotelController } from "../controllers/hotel.controller.js";
import express from "express";
import { adminAuthMiddleware } from '../middlewares/adminAuth.middleware.js';

export const router = express.Router();

router.get('/hotel/client', adminAuthMiddleware, (req, res, next) => {
    hotelController.FindInfoAllClients(req, res);
    next();
});
router.get('/hotel/client/:id', adminAuthMiddleware, (req, res, next) => {
    hotelController.FindClientByID(req, res);
    next();
});
router.post('/hotel/AddClient', adminAuthMiddleware, (req, res, next) => {
    hotelController.AddClient(req, res);
    next();
});
router.post('/hotel/EditClient/:id', adminAuthMiddleware, (req, res, next) => {
    hotelController.UpdateClient(req, res);
    next();
});
router.post('/hotel/DeleteClient/:id', adminAuthMiddleware, (req, res, next) => {
    hotelController.DeleteClient(req, res);
    next();
});