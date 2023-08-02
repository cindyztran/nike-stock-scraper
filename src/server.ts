import express from "express";
import BaseRouter from "./routes";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", BaseRouter);

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
