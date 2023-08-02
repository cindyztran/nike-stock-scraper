import { Router as routerBase, Request, Response, NextFunction } from "express";
import gmailService from "../services/gmail.service";

const router = routerBase();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fromEmail = process.env.TEST_EMAIL as string;
    const toEmail = process.env.TEST_EMAIL as string;
    const emailSubject = "Test Email";
    const emailMessage = "<h1>Hello, this is a test email!</h1>";

    const data = await gmailService.sendEmail({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      message: emailMessage,
    });
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

export default router;
