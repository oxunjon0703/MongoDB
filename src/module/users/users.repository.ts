import { IUser, UserEntity, UserModel } from "./entity/users.entity";
import { IUserRepository } from "./interfaces/users.repository";

export class UserRepository  implements IUserRepository {
  async getByLogin(login: string): Promise<IUser | null> {
    const product = await UserModel.findOne({ login: login });

    return product;
  }

  async getAll(): Promise<IUser[]> {
    const product: IUser[] = await UserModel.find();

    return product;
  }

  async getById(id: string): Promise<IUser | null> {
    const foundUserById = await UserModel.findById(id);

    return foundUserById;
  }

  async create(entity: UserEntity): Promise<IUser> {
    const newUser = new UserModel(entity);

    const createdUser = await newUser.save();

    return createdUser;
  }

  async update(id: string, entity: IUser): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, entity, { new: true });

  }

  async delete(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
}
}