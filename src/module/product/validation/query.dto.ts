import Joi from "joi";

export const productQuerySchema = Joi.object<IProductQueryDto, true>({
  name: Joi.string().optional(),
});

export type IProductQueryDto = {
  name?: string;
};
