import { Request, Response } from "express";
import HistorialModel from "../models/historial";
import SesionModel from "../models/sesion";
import { Historial } from "../models/historial";

export const obtenerHistorial = async (req: Request, res: Response) => {
  try {
    const { uid } = req;
    console.log(`en obtener historial`);
    console.log(uid);

    const historial = await HistorialModel.findOne({
      idUsuario: uid,
    }).populate("sesiones");

    res.status(201).json({
      historial,
    });
  } catch (err) {
    res.status(501).json({
      mensaje: err,
    });
  }
};
