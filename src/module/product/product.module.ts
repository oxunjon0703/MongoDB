import { Request, Response, Router } from "express";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

const productService = new ProductService();
const productController = new ProductController(productService);

const router = Router();

router.get("/", (req: Request, res: Response) => {
  productController.getAll(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  productController.getOneById(req, res);
});

router.post("/", (req: Request, res: Response) => {
  productController.create(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
  productController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  productController.delete(req, res);
});

export default { router };
