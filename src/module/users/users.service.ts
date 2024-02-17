import { ResonseData } from "../../common/resData";
import { hashed } from "../../lib/bcript";
import { IUser, UserEntity } from "./entity/users.entity";
import { UserNotFoundException } from "./exception/users.exception";
import { IUserRepository } from "./interfaces/users.repository";
import { IUserService } from "./interfaces/users.service";
import { UserRepository } from "./users.repository";
import { CreateUserDto } from "./validation/create.dto";

export class UserService implements IUserService {
  private productRepository: IUserRepository;

  constructor() {
    this.productRepository = new UserRepository();
  }

  async getAll(): Promise<ResonseData<IUser[]>> {
    const users = await this.productRepository.getAll();

    const resData = new ResonseData("get all users", 200, users);

    return resData;
  }

  async getById(id: string): Promise<ResonseData<IUser>> {
    const foundUser = await this.productRepository.getById(id);

    if (!foundUser) {
      throw new UserNotFoundException();
    }

    const resData = new ResonseData("get by id user", 200, foundUser);

    return resData;
  }

  async getByLogin(login: string): Promise<ResonseData<IUser>> {
    const foundlogin = await this.productRepository.getByLogin(login);

    const resData = new ResonseData("get by login", 200, foundlogin);

    return resData;
  }

  async create(dto: CreateUserDto): Promise<ResonseData<IUser>> {
    const hashPassword = await hashed(dto.password);

    dto.password = hashPassword;

    const newUser: UserEntity = new UserEntity(dto);

    const users = await this.productRepository.create(newUser);

    const resData = new ResonseData("create", 200, users);

    return resData;
  }

  async update(id: string, dto: UserEntity): Promise<ResonseData<IUser>> {
    const hashPassword = await hashed(dto.password);

    dto.password = hashPassword;

    const updateUser = await this.productRepository.update(id, dto);

    const resData = new ResonseData("update", 200, updateUser);

    return resData;
  }

  async delete(id: string): Promise<ResonseData<IUser>> {
    const foundUser = await this.productRepository.getById(id);

    if (!foundUser) {
      throw new UserNotFoundException();
    }

    await this.productRepository.delete(id);

    const resData = new ResonseData("delete user", 200, foundUser);

    return resData;
  }
}
