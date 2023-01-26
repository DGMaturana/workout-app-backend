"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const sesion_controller_1 = require("../controllers/sesion.controller");
const middlewares_1 = require("../middlewares");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.post("/", [validar_jwt_1.validarJWT], sesion_controller_1.crearSesion);
router.put("/terminar", [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)("sid", "Debe incluir id de sesion").notEmpty(),
    (0, express_validator_1.check)("sid", "Debe ser un id válido").isMongoId(),
    middlewares_1.validarCampos,
], sesion_controller_1.terminarSesion);
router.post("/registrar", [
// check("sid", "Debe incluir id de sesion").notEmpty(),
// check("sid", "Debe ser un id válido").isMongoId(),
// check("duracion", "Debe ser un numero entero").isInt(),
// validarCampos,
], sesion_controller_1.registrarSesion);
exports.default = router;
