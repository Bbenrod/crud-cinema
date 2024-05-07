const Function = require("../models/functionModel");

// Obtener todas las funciones
exports.getAllFunctions = async (req, res) => {
    try {
        const functions = await Function.find();
        res.json(functions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva función
exports.createFunction = async (req, res) => {
    try {
        const newFunction = new Function(req.body);
        await newFunction.save();
        res.status(201).json(newFunction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una función por su ID
exports.getFunctionById = async (req, res) => {
    try {
        const func = await Function.findOne({
            function_id: req.params.id,
        });
        if (!func) {
            return res.status(404).json({ message: "Función no encontrada" });
        }
        res.json(func);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una función por su ID
exports.updateFunction = async (req, res) => {
    try {
        const updatedFunction = await Function.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedFunction) {
            return res.status(404).json({ message: "Función no encontrada" });
        }
        res.json(updatedFunction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una función por su ID
exports.deleteFunction = async (req, res) => {
    try {
        const deletedFunction = await Function.findByIdAndDelete(req.params.id);
        if (!deletedFunction) {
            return res.status(404).json({ message: "Función no encontrada" });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
