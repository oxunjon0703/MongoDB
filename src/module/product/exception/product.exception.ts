import { IException } from "../../../common/types/types";

export class ProductNameAlreadyExist extends Error implements IException {
  statusCode: number;

  constructor() {
    super("product name already exist");

    this.statusCode = 400;
  }
}

export class ProductNotFoundException extends Error implements IException {
  statusCode: number;

  constructor() {
    super("product not found");

    this.statusCode = 404;
  }
}
