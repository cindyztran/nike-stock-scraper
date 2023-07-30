import express from "express";
import BaseRouter from "./routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", BaseRouter);

export default app;
