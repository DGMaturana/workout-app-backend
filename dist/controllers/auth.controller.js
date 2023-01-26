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
exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generar_jwt_1 = require("../helpers/generar-jwt");
//TODO: Aqui hacer función de Login de usuario
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        //Verificar si mail existe
        const usuario = yield usuario_1.default.findOne({ email });
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
        const validPassword = yield bcryptjs_1.default.compare(password, usuario.password);
        console.log(validPassword);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos",
            });
        }
        //Generar el JWT
        const token = yield (0, generar_jwt_1.generarJWT)(usuario._id);
        res.json({
            usuario,
            token,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Error durante el login. Contacte administrador.",
        });
    }
});
exports.login = login;
