const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const crearRutas = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Permitir solicitudes desde cualquier origen
app.use(cors());

// Conexión a MongoDB
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión a MongoDB establecida"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Middlewares
app.use(express.json());

// Rutas
crearRutas(app);

// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
