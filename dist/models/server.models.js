"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
    }
    //TODO: Metodos iniciales (conexion DB, middlewares, routes)
    routes() {
        this.app.use(this.apiPaths.usuarios);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto: ${this.port}`);
        });
    }
}
exports.default = Server;
