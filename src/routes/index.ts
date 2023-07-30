import { Router as expressRouter } from "express";
import General from "./general.routes";

const router = expressRouter();

router.use("/", General);

export default router;
