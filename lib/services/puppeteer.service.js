"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const gmail_service_1 = __importDefault(require("./gmail.service"));
const getStock = async () => {
    try {
        const browser = await puppeteer_1.default.launch({
            headless: "new",
        });
        const page = await browser.newPage();
        const link = "https://www.nike.com/t/air-monarch-iv-mens-training-shoes-G5Xn1k/415445-102";
        await page.goto(link);
        const id = "#skuAndSize__29304480";
        const isDisabled = await page.$eval(id, (el) => {
            if (!el) {
                throw new Error(`No element with id: ${id} found`);
            }
            return el.disabled;
        });
        if (!isDisabled) {
            await gmail_service_1.default.sendEmail({
                from: process.env.SUBJECT_EMAIL_ADDRESS,
                to: process.env.TEST_EMAIL,
                subject: "Nike Air Monarch IV Size Restock!",
                message: `<h1>Hello, the shoe size has been restocked!</h1><br/><a href=${link}>Go to page</a>`,
            });
        }
    }
    catch (err) {
        console.log({ err: err.message });
    }
};
exports.default = {
    getStock,
};
//# sourceMappingURL=puppeteer.service.js.map