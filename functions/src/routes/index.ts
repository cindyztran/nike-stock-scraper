import { Router as expressRouter } from "express";
import GeneralRoute from "./general.routes";
import PuppeteerRoute from "./puppeteer.routes";
import GmailRoute from "./gmail.routes";

const router = expressRouter();

router.use("/", GeneralRoute);
router.use("/puppeteer", PuppeteerRoute);
router.use("/gmail", GmailRoute);

export default router;
