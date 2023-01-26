import mongoose from "mongoose";
import { MONGODB_CONNECTION } from "../dotenv/config";

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION);

    console.log("base de datos ok!");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos: " + error);
  }
};
