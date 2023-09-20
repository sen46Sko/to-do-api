import express from "express";
import * as todosController from "../controllers/todosCotroller";

const router = express.Router();

router.get("/tasks", todosController.getTodos);

export default router;
