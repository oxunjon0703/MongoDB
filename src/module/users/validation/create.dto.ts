import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserDto, true>({
  login: Joi.string().required(),
  password: Joi.string().required(),
  balance: Joi.number().integer().min(0),
});
export type CreateUserDto = {
  login: string;
  password: string;
  balance: number;
};
