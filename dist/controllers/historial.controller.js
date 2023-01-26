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
exports.obtenerHistorial = void 0;
const historial_1 = __importDefault(require("../models/historial"));
const obtenerHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid } = req;
        console.log(`en obtener historial`);
        console.log(uid);
        const historial = yield historial_1.default.findOne({
            idUsuario: uid,
        }).populate("sesiones");
        console.log(historial);
        res.status(201).json({
            historial,
        });
    }
    catch (err) {
        console.log(err);
        res.status(501).json({
            mensaje: err,
        });
    }
});
exports.obtenerHistorial = obtenerHistorial;
