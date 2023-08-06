import { HttpsFunction, Request, Response } from "firebase-functions";
import * as functions from "firebase-functions";
import puppeteerService from "./services/puppeteer.service";

export const puppeteer: HttpsFunction = functions.https.onRequest(
  async (req: Request, res: Response) => {
    try {
      await puppeteerService.getStock();
      res.send("Success");
    } catch (err: any) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  }
);
