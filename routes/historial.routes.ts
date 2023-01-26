import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import { obtenerHistorial } from "../controllers/historial.controller";

const router = Router();

router.get("/", [validarJWT], obtenerHistorial);
export default router;
