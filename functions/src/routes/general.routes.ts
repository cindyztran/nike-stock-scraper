import { Router as routerBase, Request, Response, NextFunction } from "express";
import generalService from "../services/general.service";

const router = routerBase();

router.get(
  "/heartbeat",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await generalService.get();
      res.json(data);
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
