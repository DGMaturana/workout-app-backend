import { Request, Response, NextFunction } from "express";
import UsuarioModel from "../models/usuario";
import jwt = require("jsonwebtoken");

interface IJwtPayload {
  uid: string;
}

export const validarJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETJWTKEY!) as IJwtPayload;
    // Leer el usuario que corresponde al uid
    const usuario = await UsuarioModel.findById(uid);

    console.log(usuario);
    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido ' usuario borrado de la BD",
      });
    }

    // Verificar si el uid tiene estado true

    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Token no válido - usuario con estado: false",
      });
    }

    req.uid = usuario._id;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no valido",
    });
  }
};
