const express = require("express");
const { getAvaliableSeats, getSeats } = require("../controllers/seatController");

const seat_router = express.Router({ mergeParams: true });

// Define el nombre de la ruta
const SEAT_ROUTE_NAME = "seats";

// Define las rutas para la colección de asientos
seat_router.get("/", getSeats);

seat_router.get("/avaliable", getAvaliableSeats);

// seat_router.post("/", createSeat);

// seat_router.get("/:id", getSeatById);

// seat_router.patch("/:id", updateSeat);

// seat_router.delete("/:id", deleteSeat);

module.exports = { seat_router, SEAT_ROUTE_NAME };
