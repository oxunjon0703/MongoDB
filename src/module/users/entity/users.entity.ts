import mongoose, { ObjectId, Schema } from "mongoose";
import { CreateUserDto } from "../validation/create.dto";

export interface IUser {
  login: string;
  password: string;
  balance: number;
}

export class UserEntity implements IUser {
  _id: ObjectId | undefined;
  login: string;
  password: string;
  balance: number;
  constructor(dto: CreateUserDto) {
    this.login = dto.login;
    this.password = dto.password;
    this.balance = dto.balance;
  }
}



const userSchema = new Schema<IUser>({
  login: {type: String, required: [true, "login must be required"]},
  password: {type: String, required: [true, "password must be required"]},
  balance: {type: Number},
});

export const UserModel = mongoose.model<IUser>(
  "Users",
  userSchema,
  "users"
);


