import { Request, Response } from "express";
import HistorialModel from "../models/historial";
import SesionModel, { Sesion } from "../models/sesion";
import { Historial } from "../models/historial";
import EjercicioModel from "../models/ejercicio";
import { Ejercicio } from "../models/ejercicio";

export const crearSesion = async (req: Request, res: Response) => {
  const { uid } = req;
  try {
    // Comprobar si existe una sesión no finalizada.
    const sesionExistente = await SesionModel.findOne({
      terminada: false,
    });

    if (sesionExistente) {
      return res.status(201).json({
        msg: "No se puede crear sesión ya que tiene aún una por finalizar",
      });
    }

    const sesion = await SesionModel.create({});

    const historialExistente = await HistorialModel.findOne({
      idUsuario: uid,
    });

    const historial = await HistorialModel.findOneAndUpdate(
      {
        idUsuario: uid,
      },
      {
        $push: {
          sesiones: {
            _id: sesion._id,
            sesion,
          },
        },
      }
    );

    res.status(201).json({
      sesion,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      mensaje: err,
    });
  }
};

export const terminarSesion = async (req: Request, res: Response) => {
  const { sid } = req.body;
  try {
    const sesion = await SesionModel.findByIdAndUpdate(sid, {
      $set: { terminada: true },
    });

    return res.status(201).json({
      sesion,
    });
  } catch (err) {
    return res.status(501).json({
      msg: "Id sesion incorrecto",
    });
  }
};

export const registrarSesion = async (req: Request, res: Response) => {
  const { id, duracion } = req.body as Sesion;
  const ejercicios = req.body.ejercicios as [Ejercicio];

  try {
    const ejerciciosInsertados = await EjercicioModel.insertMany(ejercicios);

    const ejerciciosIds = ejerciciosInsertados.map((ej) => ej._id);

    const sesion = await SesionModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ejercicios: ejerciciosIds,
        duracion,
        $set: {
          terminada: true,
        },
      }
    );

    return res.status(201).json({
      msg: "ok llego",
      sesion,
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      msg: "Error",
    });
  }
};
