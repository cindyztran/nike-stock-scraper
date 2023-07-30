import { Router as expressRouter } from "express";
import General from "./general.routes";
import PuppeteerRoute from "./puppeteer.routes";

const router = expressRouter();

router.use("/", General);
router.use("/puppeteer", PuppeteerRoute);
export default router;
