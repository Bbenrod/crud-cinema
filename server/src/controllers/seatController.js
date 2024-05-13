const Seat = require("../models/seatModel");

// Obtener todos los asientos
exports.getSeats = async (req, res) => {
    try {
        const seats = await Seat.find({
            function_id: req.params.functionId,
        });

        res.json(seats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAvaliableSeats = async (req, res) => {
    try {
        const seats = await Seat.find({
            function_id: req.params.functionId,
        });

        res.json(seats.filter((seat) => seat.availability));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buySeats = async (req, res) => {
    const seatIds = req.body.seat_ids; // Suponiendo que los IDs de los asientos se reciben en el cuerpo de la solicitud
    console.log(seatIds);

    try {
        // Verificar si se proporcionaron los IDs de los asientos
        if (!seatIds || seatIds.length === 0) {
            return res.status(400).json({
                message:
                    "Se requiere al menos un ID de asiento para realizar la compra",
            });
        }

        // Actualizar la disponibilidad de los asientos
        const updateResult = await Seat.updateMany(
            { seat_id: { $in: seatIds } }, // Filtrar por los IDs de los asientos recibidos
            { $set: { availability: false } } // Actualizar la disponibilidad a false
        );

        // Verificar si se actualizaron asientos
        if (!updateResult || updateResult.nModified === 0) {
            return res
                .status(404)
                .json({ message: "No se pudieron comprar los asientos" });
        }

        res.json({ message: "Asientos comprados exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
