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
const express_1 = __importDefault(require("express"));
const config_1 = require("../database/config");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.apiPaths = {
            auth: "/api/auth",
            historial: "/api/historial",
            usuarios: "/api/usuarios",
            sesion: "/api/sesion",
            serie: "/api/serie",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    //TODO: Metodos iniciales (conexion DB, middlewares, routes)
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.auth, routes_1.authRoutes);
        this.app.use(this.apiPaths.historial, routes_1.historialRoutes);
        this.app.use(this.apiPaths.sesion, routes_1.sesionRoutes);
        this.app.use(this.apiPaths.serie, routes_1.serieRoutes);
        this.app.use(this.apiPaths.usuarios, routes_1.userRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto: ${this.port}`);
        });
    }
}
exports.default = Server;
