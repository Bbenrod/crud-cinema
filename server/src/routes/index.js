const express = require("express");
const { FUNCTION_ROUTE_NAME, function_router } = require("./functionRoute");
const { SEAT_ROUTE_NAME, seat_router } = require("./seatRoute");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, world!");
});

router.use(`/${FUNCTION_ROUTE_NAME}`, function_router);
router.use(`/${SEAT_ROUTE_NAME}`, seat_router);

const crearRutas = (app) => {
    app.use("/api", router);
};

module.exports = crearRutas;
