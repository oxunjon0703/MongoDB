import { Request, Response } from "express";
import { IUserService } from "./interfaces/users.service";
import { ResonseData } from "../../common/resData";
import { Error } from "../../common/types/types";
import { checkDto } from "../../lib/cheackDto";
import { UserLoginAlreadyException } from "./exception/users.exception";
import { UpdateUserDto, updateUserSchema } from "./validation/update.dto";
import { CreateUserDto } from "./validation/create.dto";

export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async getAll(req: Request, res: Response) {
    try {
      const resData = await this.userService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.statusCode,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id: string = req.params?.id;

      const resData = await this.userService.getById(id);

      res.status(resData.statusCode).json(resData);
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.statusCode,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const dto: CreateUserDto = req.body

      const {data: checkLogin} = await this.userService.getByLogin(dto.login);

      if(checkLogin) {
        throw new UserLoginAlreadyException()
      }

      const resData = await this.userService.create(dto)

      res.status(resData.statusCode).json(resData)
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.statusCode,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async update (req: Request, res: Response) {
    try {
      const dto = req.body
      const id = req.params.id

      checkDto<UpdateUserDto>(updateUserSchema, dto)

      const {data: checkLogin} = await this.userService.getByLogin(dto.login);

      if(checkLogin) {
        throw new UserLoginAlreadyException()
      }

      const resData = await this.userService.update(id, dto)

      res.status(resData.statusCode).json(resData);
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.statusCode,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id: string = req.params?.id;

      const resData = await this.userService.delete(id);

      res.status(resData.statusCode).json(resData);
    } catch (error: Error | any) {
      const resData = new ResonseData(
        error.message,
        error.statusCode,
        null,
        error
      );

      res.status(resData.statusCode).json(resData);
    }
  }
}
