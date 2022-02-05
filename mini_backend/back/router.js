import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/order", PostController.create);
router.get("/order", PostController.getAll);
router.get("/order/:id", PostController.getOne);
router.put("/order", PostController.update);
router.delete("/order/id", PostController.delete);

export default router;
