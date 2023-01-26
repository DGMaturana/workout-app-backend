import UsuarioModel from "../models/usuario";

export const emailExiste = async (email: string) => {
  const existeEmail = await UsuarioModel.findOne({
    email,
  });
  if (existeEmail) throw new Error(`El email: ${email} ya está registrado`);
};
