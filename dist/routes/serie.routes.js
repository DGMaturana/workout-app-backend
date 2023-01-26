"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const serie_controller_1 = require("../controllers/serie.controller");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("ejercicio", "Debe incluir nombre de ejercicio").notEmpty(),
    (0, express_validator_1.check)("peso", "Debe incluir peso utilizado (en Kg)").notEmpty().isFloat(),
    (0, express_validator_1.check)("repeticiones", "Debe incluir repeticiones totales de la serie")
        .notEmpty()
        .isInt(),
    (0, express_validator_1.check)("sesionId", "Debe incluir id de sesión válido")
        .notEmpty()
        .isMongoId(),
    middlewares_1.validarCampos,
], serie_controller_1.agregarSerie);
exports.default = router;
