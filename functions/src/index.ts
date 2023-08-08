import * as functions from "firebase-functions/v2/https";
import puppeteerService from "./services/puppeteer.service";

export const puppeteer = functions.onRequest(async (req: any, res: any) => {
  try {
    await puppeteerService.getStock();
    res.send("Success");
  } catch (err: any) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
});
