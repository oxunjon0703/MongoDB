import { Request, Response, Router } from "express";
import { UserService } from "./users.service";
import { UserController } from "./users.controller";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/", (req: Request, res: Response) => {
  userController.getAll(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  userController.getById(req, res);
});

router.post("/", (req: Request, res: Response) => {
  userController.create(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
  userController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  userController.delete(req, res);
});

export default { router };
