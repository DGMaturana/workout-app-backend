import express, { Application } from "express";
import { dbConnection } from "../database/config";

import cors from "cors";
import {
  authRoutes,
  serieRoutes,
  historialRoutes,
  sesionRoutes,
  userRoutes,
} from "../routes";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    auth: "/api/auth",
    historial: "/api/historial",
    usuarios: "/api/usuarios",
    sesion: "/api/sesion",
    serie: "/api/serie",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.conectarDB();
    this.middlewares();
    this.routes();
  }
  //TODO: Metodos iniciales (conexion DB, middlewares, routes)

  async conectarDB() {
    await dbConnection();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.historial, historialRoutes);
    this.app.use(this.apiPaths.sesion, sesionRoutes);
    this.app.use(this.apiPaths.serie, serieRoutes);
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server corriendo en el puerto: ${this.port}`);
    });
  }
}

export default Server;
