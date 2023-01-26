"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarSesion = exports.terminarSesion = exports.crearSesion = void 0;
const historial_1 = __importDefault(require("../models/historial"));
const sesion_1 = __importDefault(require("../models/sesion"));
const ejercicio_1 = __importDefault(require("../models/ejercicio"));
const crearSesion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req;
    try {
        // Comprobar si existe una sesión no finalizada.
        const sesionExistente = yield sesion_1.default.findOne({
            terminada: false,
        });
        if (sesionExistente) {
            return res.status(201).json({
                msg: "No se puede crear sesión ya que tiene aún una por finalizar",
            });
        }
        const sesion = yield sesion_1.default.create({});
        const historialExistente = yield historial_1.default.findOne({
            idUsuario: uid,
        });
        const historial = yield historial_1.default.findOneAndUpdate({
            idUsuario: uid,
        }, {
            $push: {
                sesiones: {
                    _id: sesion._id,
                    sesion,
                },
            },
        });
        res.status(201).json({
            sesion,
        });
    }
    catch (err) {
        console.log(err);
        res.status(501).json({
            mensaje: err,
        });
    }
});
exports.crearSesion = crearSesion;
const terminarSesion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sid } = req.body;
    try {
        const sesion = yield sesion_1.default.findByIdAndUpdate(sid, {
            $set: { terminada: true },
        });
        return res.status(201).json({
            sesion,
        });
    }
    catch (err) {
        return res.status(501).json({
            msg: "Id sesion incorrecto",
        });
    }
});
exports.terminarSesion = terminarSesion;
const registrarSesion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, duracion } = req.body;
    const ejercicios = req.body.ejercicios;
    try {
        const ejerciciosInsertados = yield ejercicio_1.default.insertMany(ejercicios);
        const ejerciciosIds = ejerciciosInsertados.map((ej) => ej._id);
        const sesion = yield sesion_1.default.findByIdAndUpdate({
            _id: id,
        }, {
            ejercicios: ejerciciosIds,
            duracion,
            $set: {
                terminada: true,
            },
        });
        return res.status(201).json({
            msg: "ok llego",
            sesion,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(501).json({
            msg: "Error",
        });
    }
});
exports.registrarSesion = registrarSesion;
