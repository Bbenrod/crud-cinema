// Importa Mongoose
const mongoose = require("mongoose");

// Define el esquema para Seats
const seatSchema = new mongoose.Schema({
    seat_id: {
        type: String,
        required: true,
    },
    function_id: {
        type: Number,
        ref: "Function",
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
});

// Define el modelo de Seats
const Seat = mongoose.model("Seat", seatSchema);

// Exporta el modelo de Seat
module.exports = Seat;
