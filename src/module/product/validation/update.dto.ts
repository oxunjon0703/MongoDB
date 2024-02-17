import Joi from "joi";
import { CreateProductDto, createProductSchema } from "./create.dto";

export const updateProductSchema = Joi.object<UpdateProductDto, true>({
  name: Joi.string().optional(),
  price: Joi.number().integer().min(0).optional(),
  count: Joi.number().integer().min(0).optional(),
});

export type UpdateProductDto = Partial<CreateProductDto>;
