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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarUsuario = exports.editarUsuario = exports.crearUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import { Usuario } from '../models/usuario';
const historial_1 = __importDefault(require("../models/historial"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.find({});
        res.status(201).json({
            usuarios,
        });
    }
    catch (err) {
        res.status(501).json({
            mensaje: err,
        });
    }
});
exports.getUsuarios = getUsuarios;
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, password } = req.body;
    const salt = yield bcryptjs_1.default.genSalt();
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    try {
        const usuario = yield usuario_1.default.create({
            nombre,
            email,
            password: hashedPassword,
        });
        const historial = yield historial_1.default.create({
            idUsuario: usuario._id,
        });
        res.status(201).json({ usuario });
    }
    catch (err) {
        res.status(400).send(`No se pudo crear el usuario, error: ${err}`);
    }
});
exports.crearUsuario = crearUsuario;
const editarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, email, password } = _a, resto = __rest(_a, ["_id", "email", "password"]);
    if (password) {
        const salt = bcryptjs_1.default.genSaltSync();
        resto.password = bcryptjs_1.default.hashSync(password, salt);
    }
    const usuario = yield usuario_1.default.findByIdAndUpdate(id, resto);
    res.json(usuario);
});
exports.editarUsuario = editarUsuario;
const borrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByIdAndUpdate(id, { estado: false });
    console.log(usuario);
    res.status(201).json({ msg: "Usuario eliminado" });
});
exports.borrarUsuario = borrarUsuario;
