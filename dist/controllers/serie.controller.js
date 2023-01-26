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
exports.agregarSerie = void 0;
const serie_1 = __importDefault(require("../models/serie"));
const sesion_1 = __importDefault(require("../models/sesion"));
const agregarSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ejercicio, peso, repeticiones, sesionId } = req.body;
    try {
        const serie = yield serie_1.default.create({
            peso,
            repeticiones,
        });
        const sesion = yield sesion_1.default.findByIdAndUpdate(sesionId, {
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
    }
    catch (err) {
        console.log(err);
        return res.status(501).json({
            msg: "Error",
        });
    }
});
exports.agregarSerie = agregarSerie;
