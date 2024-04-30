require("dotenv").config();
const mongoose = require("mongoose");
const Function = require("./src/models/functionModel");
const Seat = require("./src/models/seatModel");

mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión a MongoDB establecida"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

async function initDB() {
    try {
        // Eliminar todas las funciones y asientos existentes en la base de datos
        await Function.deleteMany({});
        await Seat.deleteMany({});

        // Crear tres películas con function_id único
        const movieData = [
            { function_id: 1, movie_title: "Batman" },
            { function_id: 2, movie_title: "Endgame" },
            { function_id: 3, movie_title: "Love, Simon" },
        ];
        const movies = await Function.create(movieData);

        // Crear asientos para cada película con disponibilidad aleatoria
        const rows = ["A", "B", "C", "D", "E", "F", "G"];
        for (let movie of movies) {
            for (let row of rows) {
                for (let seatNumber = 1; seatNumber <= 7; seatNumber++) {
                    const seatId = `${row}${seatNumber}`;
                    const availability = Math.random() < 0.5; // Genera true o false aleatoriamente
                    await Seat.create({
                        function_id: movie.function_id,
                        seat_id: seatId,
                        availability,
                    });
                }
            }
        }

        console.log("[Init] Base de datos inicializada con éxito");
    } catch (error) {
        console.error(
            "[Init] Error al inicializar la base de datos:",
            error.message
        );
    } finally {
        mongoose.disconnect();
    }
}

initDB();
