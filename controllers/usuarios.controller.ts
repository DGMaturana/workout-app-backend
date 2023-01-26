import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcryptjs from "bcryptjs";
// import { Usuario } from '../models/usuario';
import HistorialModel from "../models/historial";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await UsuarioModel.find({});
    res.status(201).json({
      usuarios,
    });
  } catch (err) {
    res.status(501).json({
      mensaje: err,
    });
  }
};

export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;

  const salt = await bcryptjs.genSalt();
  const hashedPassword = await bcryptjs.hash(password, salt);

  try {
    const usuario = await UsuarioModel.create({
      nombre,
      email,
      password: hashedPassword,
    });

    const historial = await HistorialModel.create({
      idUsuario: usuario._id,
    });

    res.status(201).json({ usuario });
  } catch (err) {
    res.status(400).send(`No se pudo crear el usuario, error: ${err}`);
  }
};

export const editarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id, email, password, ...resto } = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();

    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await UsuarioModel.findByIdAndUpdate(id, resto);
  res.json(usuario);
};

export const borrarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await UsuarioModel.findByIdAndUpdate(id, { estado: false });
  console.log(usuario);
  res.status(201).json({ msg: "Usuario eliminado" });
};
