const functions = require("@google-cloud/functions-framework");
import { NextFunction } from "express";
import puppeteerService from "./services/puppeteer.service";

export const puppeteer = functions.http(
  "/puppeteer",
  async (req: Request, res: any, next: NextFunction) => {
    try {
      await puppeteerService.getStock();
    } catch (err: any) {
      next(err);
    }

    res.send("Success");
  }
);
