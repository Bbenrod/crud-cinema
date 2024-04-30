const express = require("express");
const {
    getAllFunctions,
    createFunction,
    getFunctionById,
    updateFunction,
    deleteFunction,
} = require("../controllers/functionController");

const function_router = express.Router();

// Define el nombre de la ruta
const FUNCTION_ROUTE_NAME = "functions";

// Define las rutas para la colección de funciones
function_router.get("/", getAllFunctions);

function_router.post("/", createFunction);

function_router.get("/:id", getFunctionById);

function_router.patch("/:id", updateFunction);

function_router.delete("/:id", deleteFunction);

module.exports = { function_router, FUNCTION_ROUTE_NAME };
