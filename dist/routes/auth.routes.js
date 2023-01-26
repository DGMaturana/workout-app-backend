"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("email", "El Email es obligatorio").isEmail(),
    (0, express_validator_1.check)("password", "La contraseña es obligatoria").not().isEmpty(),
    middlewares_1.validarCampos,
], auth_controller_1.login);
exports.default = router;
