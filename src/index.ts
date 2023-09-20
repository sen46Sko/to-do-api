import express from "express";
import * as todosRouter from "./routes/todos";

const app = express();

app.use("/todos", todosRouter);

app.listen(8000);
