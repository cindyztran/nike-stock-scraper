import puppeteer from "puppeteer";
import gmailService from "./gmail.service";

const getStock = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();

    const link =
      "https://www.nike.com/t/air-monarch-iv-mens-training-shoes-G5Xn1k/415445-102";

    await page.goto(link);

    const id = "#skuAndSize__29304480";
    const isDisabled = await page.$eval(id, (el: any) => {
      if (!el) {
        throw new Error(`No element with id: ${id} found`);
      }
      return el.disabled;
    });

    if (!isDisabled) {
      await gmailService.sendEmail({
        from: process.env.SUBJECT_EMAIL_ADDRESS as string,
        to: process.env.TEST_EMAIL as string,
        subject: "Nike Air Monarch IV Size Restock!",
        message: `<h1>Hello, the shoe size has been restocked!</h1><br/><a href=${link}>Go to page</a>`,
      });
    }
  } catch (err: any) {
    console.log({ err: err.message });
  }
};

export default {
  getStock,
};
