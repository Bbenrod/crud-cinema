const Seat = require("../models/seatModel");

// Obtener todos los asientos
exports.getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.json(seats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo asiento
exports.createSeat = async (req, res) => {
    try {
        const newSeat = new Seat(req.body);
        await newSeat.save();
        res.status(201).json(newSeat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un asiento por su ID
exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) {
            return res.status(404).json({ message: "Asiento no encontrado" });
        }
        res.json(seat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un asiento por su ID
exports.updateSeat = async (req, res) => {
    try {
        const updatedSeat = await Seat.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedSeat) {
            return res.status(404).json({ message: "Asiento no encontrado" });
        }
        res.json(updatedSeat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un asiento por su ID
exports.deleteSeat = async (req, res) => {
    try {
        const deletedSeat = await Seat.findByIdAndDelete(req.params.id);
        if (!deletedSeat) {
            return res.status(404).json({ message: "Asiento no encontrado" });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
