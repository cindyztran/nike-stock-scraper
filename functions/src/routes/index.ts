import { Router as expressRouter } from "express";
import GeneralRoute from "./general.routes";

const router = expressRouter();

router.use("/", GeneralRoute);

export default router;
