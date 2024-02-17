import Joi from "joi";
import { CreateUserDto } from "./create.dto";

export const updateUserSchema = Joi.object<UpdateUserDto, true>({
  login: Joi.string().optional(),
  password: Joi.string().optional(),
  balance: Joi.number().optional(),
});

export type UpdateUserDto = Partial<CreateUserDto>;