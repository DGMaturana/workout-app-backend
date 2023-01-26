import { config } from "dotenv";

config();

export const { MONGODB_CONNECTION } = process.env as {
  [key: string]: string;
};
