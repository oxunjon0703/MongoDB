import { IException } from "../../../common/types/types";

export class UserLoginAlreadyException extends Error implements IException {
  statusCode: number;

  constructor() {
    super("User login already exist");

    this.statusCode = 400;
  }
}

export class UserNotFoundException extends Error implements IException {
  statusCode: number;

  constructor() {
    super("User not found"); 

    this.statusCode = 400;
  }
}
