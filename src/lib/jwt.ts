import jwt, { JwtPayload } from "jsonwebtoken";

import { config } from "../common/config/index";

export const generateToken = (data: string): string => {
  const token = jwt.sign(
    { data, exp: Math.floor(Date.now() / 1000) + 300 * 60 },
    `${config.jwtKey}`
  );
  return token;
};

export const verifyToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, `${config.jwtKey}`);
};
