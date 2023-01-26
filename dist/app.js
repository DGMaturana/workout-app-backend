"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
// async function operaciones() {
//   try {
//     const usuario = await UsuarioModel.create({
//       nombre: "Javi",
//       email: "javieraundurragadlf@gmail.com",
//       password: "1234567",
//     });
//     console.log(usuario);
//   } catch (err) {
//     console.log(`Error: ${err}`);
//   }
// }
// operaciones();
