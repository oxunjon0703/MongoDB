import dotenv from "dotenv";
import { Config } from "../types/types";

dotenv.config();

export const config: Config = {
  port: Number(process.env.PORT),
  jwtKey: process.env.JWT_KEY || "",
  dbMongo: process.env.DB_MONGO || "",
};
