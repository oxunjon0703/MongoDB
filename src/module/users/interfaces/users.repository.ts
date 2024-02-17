import { IUser, UserEntity } from "../entity/users.entity";

export interface IUserRepository {
    getAll(): Promise<IUser[]>;
    getById(id: string): Promise<IUser | null>;
    getByLogin(login: string): Promise<IUser | null>;
    create(entity: UserEntity): Promise<IUser>
    update(id: string, entity: IUser): Promise<IUser | null>
    delete(id: string): Promise<IUser | null>
}
