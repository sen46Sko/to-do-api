import { Request, Response } from "express";
import * as todosServices from "../services/todos";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todosServices.get();

    res.json(todos);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const create = (req: Request, res: Response) => {
  res.sendStatus(201);
};

export const update = (req: Request, res: Response) => {
  res.sendStatus(200);
};
