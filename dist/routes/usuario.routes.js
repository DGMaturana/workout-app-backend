"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const db_validators_1 = require("../helpers/db-validators");
const router = (0, express_1.Router)();
router.get("/", usuarios_controller_1.getUsuarios);
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password debe ser de más de 6 carácteres").isLength({
        min: 6,
    }),
    (0, express_validator_1.check)("email", "Email no es válido").isEmail(),
    (0, express_validator_1.check)("email").custom(db_validators_1.emailExiste),
    validar_campos_1.validarCampos,
], usuarios_controller_1.crearUsuario);
//TODO: Agregar validacion de roles, si es un id mongo valido y si existe el usuario con esta ID
router.delete("/:id", usuarios_controller_1.borrarUsuario);
exports.default = router;
