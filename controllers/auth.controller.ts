import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../helpers/generar-jwt";
//TODO: Aqui hacer función de Login de usuario

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    //Verificar si mail existe
    const usuario = await UsuarioModel.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "Email / Password no son correctos",
      });
    }

    //Verificar si usuario está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Usuario desactivado",
      });
    }

    //Verificar la cont raseña
    const validPassword = await bcryptjs.compare(password, usuario.password!);
    console.log(validPassword);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }

    //Generar el JWT

    const token = await generarJWT(usuario._id);
    res.json({
      usuario,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Error durante el login. Contacte administrador.",
    });
  }
};
