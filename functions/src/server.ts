import express from "express";
import BaseRouter from "./routes";
import * as admin from "firebase-admin";
import { credentials } from "./utils/gmail";
import dotenv from "dotenv";
dotenv.config();

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", BaseRouter);

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
