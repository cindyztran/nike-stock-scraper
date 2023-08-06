import { Router as routerBase, Request, Response, NextFunction } from "express";
import puppeteerService from "../services/puppeteer.service";

const router = routerBase();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await puppeteerService.getStock();
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

export default router;
