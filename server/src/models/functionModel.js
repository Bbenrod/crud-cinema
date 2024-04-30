// Importa Mongoose
const mongoose = require("mongoose");

// Define el esquema para Functions
const functionSchema = new mongoose.Schema({
    function_id: {
        type: Number,
        required: true,
        unique: true,
    },
    movie_title: {
        type: String,
        required: true,
    },
});

// Define el modelo de Functions
const Function = mongoose.model("Function", functionSchema);

// Exporta el modelo de Function
module.exports = Function;
