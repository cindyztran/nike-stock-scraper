"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gmail_service_1 = __importDefault(require("../services/gmail.service"));
const router = (0, express_1.Router)();
router.post("/", async (req, res, next) => {
    try {
        const fromEmail = process.env.TEST_EMAIL;
        const toEmail = process.env.TEST_EMAIL;
        const emailSubject = "Test Email";
        const emailMessage = "<h1>Hello, this is a test email!</h1>";
        const data = await gmail_service_1.default.sendEmail({
            from: fromEmail,
            to: toEmail,
            subject: emailSubject,
            message: emailMessage,
        });
        res.json(data);
    }
    catch (err) {
        return next(err);
    }
});
exports.default = router;
//# sourceMappingURL=gmail.routes.js.map