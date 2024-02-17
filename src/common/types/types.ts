export type Config = {
  port: number;
  jwtKey: string;
  dbMongo: string;
};

export interface Error {
  name: string;
  message: string;
  stack?: string;
  status?: number;
}

export interface IException {
  statusCode: number;
  message: string;
}
