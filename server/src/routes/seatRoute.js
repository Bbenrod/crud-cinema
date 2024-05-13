const express = require("express");
const {
    getAvaliableSeats,
    getSeats,
    buySeats,
} = require("../controllers/seatController");

const seat_router = express.Router({ mergeParams: true });

// Define el nombre de la ruta
const SEAT_ROUTE_NAME = "seats";

// Define las rutas para la colección de asientos
seat_router.get("/", getSeats);

seat_router.get("/avaliable", getAvaliableSeats);

seat_router.post("/buy", buySeats);

module.exports = { seat_router, SEAT_ROUTE_NAME };
