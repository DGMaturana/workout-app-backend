import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import {
  getUsuarios,
  crearUsuario,
  borrarUsuario,
} from "../controllers/usuarios.controller";
import { emailExiste } from "../helpers/db-validators";

const router = Router();

router.get("/", getUsuarios);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser de más de 6 carácteres").isLength({
      min: 6,
    }),
    check("email", "Email no es válido").isEmail(),
    check("email").custom(emailExiste),

    validarCampos,
  ],
  crearUsuario
);

//TODO: Agregar validacion de roles, si es un id mongo valido y si existe el usuario con esta ID
router.delete("/:id", borrarUsuario);
export default router;
