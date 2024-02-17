import { IException } from "../../../common/types/types";

export class TransactionNotFoundExist extends Error implements IException {
  statusCode: number;

  constructor() {
    super("Transaction not found"); 

    this.statusCode = 400;
  }
}

export class ProductCountExseption extends Error implements IException {
  statusCode: number;

  constructor() {
    super("There are not enough products"); 

    this.statusCode = 400;
  }
}

