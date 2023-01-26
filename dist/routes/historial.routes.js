"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const historial_controller_1 = require("../controllers/historial.controller");
const router = (0, express_1.Router)();
router.get("/", [validar_jwt_1.validarJWT], historial_controller_1.obtenerHistorial);
exports.default = router;
