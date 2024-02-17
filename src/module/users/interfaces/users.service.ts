import { ResonseData } from "../../../common/resData";
import { IUser, UserEntity } from "../entity/users.entity";
import { CreateUserDto } from "../validation/create.dto";

export interface IUserService {
    getAll(): Promise<ResonseData<IUser[]>>
    getById(id: string): Promise<ResonseData<IUser>>
    create(dto: CreateUserDto) : Promise<ResonseData<IUser>>
    update(id: string, dto: UserEntity) : Promise<ResonseData<IUser>>
    delete(id: string): Promise<ResonseData<IUser>>
    getByLogin(login: string): Promise<ResonseData<IUser | undefined>>;
}
