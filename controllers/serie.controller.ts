import { Request, Response } from "express";
import SerieModel from "../models/serie";
import SesionModel from "../models/sesion";

export const agregarSerie = async (req: Request, res: Response) => {
  const { ejercicio, peso, repeticiones, sesionId } = req.body;
  try {
    const serie = await SerieModel.create({
      peso,
      repeticiones,
    });

    const sesion = await SesionModel.findByIdAndUpdate(sesionId, {
      $push: {
        series: {
          serie,
        },
      },
    });

    return res.status(201).json({
      msg: "ok",
      sesion,
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      msg: "Error",
    });
  }
};
