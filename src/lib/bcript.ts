// import { hash } from "bcrypt";
import bcrypt from "bcrypt";

export const hashed = (data: string): Promise<string | ""> => {
    const salt: number = 10

    return bcrypt.hash(data, salt);
}

export const compare = (data: string, hashData: string): Promise<boolean> => {
    return bcrypt.compare(data, hashData)
}