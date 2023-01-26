"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historialRoutes = exports.sesionRoutes = exports.userRoutes = exports.authRoutes = exports.serieRoutes = void 0;
const usuario_routes_1 = __importDefault(require("./usuario.routes"));
exports.userRoutes = usuario_routes_1.default;
const auth_routes_1 = __importDefault(require("./auth.routes"));
exports.authRoutes = auth_routes_1.default;
const sesion_routes_1 = __importDefault(require("./sesion.routes"));
exports.sesionRoutes = sesion_routes_1.default;
const historial_routes_1 = __importDefault(require("./historial.routes"));
exports.historialRoutes = historial_routes_1.default;
const serie_routes_1 = __importDefault(require("./serie.routes"));
exports.serieRoutes = serie_routes_1.default;
