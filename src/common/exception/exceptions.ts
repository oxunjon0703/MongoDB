import { IException } from "../types/types";

export class BadRequestException extends Error implements IException {
  statusCode: number;

  constructor(message: string) {
    super(message);

    this.statusCode = 400;
  }
}
