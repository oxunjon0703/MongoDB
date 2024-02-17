import { Router } from "express"
import product from "./product/product.module"
import user from "./users/users.modules"
import transaction from "./transaction/transactions.modules"

const router = Router()

router.use("/product", product.router);
router.use("/user", user.router);
router.use("/transaction", transaction.router);

export default { router }