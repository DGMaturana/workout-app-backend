import { Router } from "express";
import { check } from "express-validator";
import { agregarSerie } from "../controllers/serie.controller";

import { validarCampos } from "../middlewares";

const router = Router();

router.post(
  "/",
  [
    check("ejercicio", "Debe incluir nombre de ejercicio").notEmpty(),
    check("peso", "Debe incluir peso utilizado (en Kg)").notEmpty().isFloat(),
    check("repeticiones", "Debe incluir repeticiones totales de la serie")
      .notEmpty()
      .isInt(),
    check("sesionId", "Debe incluir id de sesión válido")
      .notEmpty()
      .isMongoId(),
    validarCampos,
  ],
  agregarSerie
);

export default router;
