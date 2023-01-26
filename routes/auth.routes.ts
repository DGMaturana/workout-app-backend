import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/auth.controller";

import { validarCampos } from "../middlewares";

const router = Router();

router.post(
  "/login",
  [
    check("email", "El Email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

export default router;
