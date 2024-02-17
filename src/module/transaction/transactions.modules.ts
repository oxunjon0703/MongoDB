import { Request, Response, Router } from "express";
import { TransactionService } from "./transactions.service";
import { TransactionController } from "./transactions.controller";
import { UserService } from "../users/users.service";
import { ProductService } from "../product/product.service";

const router = Router();

const transactionService = new TransactionService();
const userService = new UserService();
const productService = new ProductService();
const transactionController = new TransactionController(
  transactionService,
  userService,
  productService
);

router.get("/", (req: Request, res: Response) => {
  transactionController.getAll(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  transactionController.getById(req, res);
});

router.post("/", (req: Request, res: Response) => {
  transactionController.create(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  transactionController.delete(req, res);
});

export default { router };
