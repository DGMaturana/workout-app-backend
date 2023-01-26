import dotenv from "dotenv";
import Server from "./models/server";
import UsuarioModel from "./models/usuario";

dotenv.config();

const server = new Server();

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
