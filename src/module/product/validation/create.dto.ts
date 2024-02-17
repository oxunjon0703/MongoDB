import Joi from "joi";

export const createProductSchema = Joi.object<CreateProductDto, true>({
  name: Joi.string().required(),
  price: Joi.number().integer().min(0).required(),
  count: Joi.number().integer().min(0).required(),
});

export type CreateProductDto = {
  name: string;
  price: number;
  count: number;
};