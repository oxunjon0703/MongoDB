import Joi from "joi";
import { CreateProductDto } from "./create.dto";

export const createProductSchema = Joi.object<UpdateProductDto, true>({
  name: Joi.string().optional(),
  price: Joi.number().integer().min(0).optional(),
  count: Joi.number().integer().min(0).optional(),
});

export type UpdateProductDto = Partial<CreateProductDto>;