import { Router } from "express";
import { check } from "express-validator";
import { agregarSerie } from "../controllers/serie.controller";
import {
  crearSesion,
  terminarSesion,
  registrarSesion,
} from "../controllers/sesion.controller";

import { validarCampos } from "../middlewares";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

router.post("/", [validarJWT], crearSesion);
router.put(
  "/terminar",
  [
    validarJWT,
    check("sid", "Debe incluir id de sesion").notEmpty(),
    check("sid", "Debe ser un id válido").isMongoId(),
    validarCampos,
  ],
  terminarSesion
);

router.post(
  "/registrar",
  [
    // check("sid", "Debe incluir id de sesion").notEmpty(),
    // check("sid", "Debe ser un id válido").isMongoId(),
    // check("duracion", "Debe ser un numero entero").isInt(),
    // validarCampos,
  ],
  registrarSesion
);

export default router;
