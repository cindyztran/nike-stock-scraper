import puppeteer from "puppeteer";

const getStock = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto("https://www.nike.com");
  await page.screenshot({ path: "example.png" });
  await browser.close();
};

export default {
  getStock,
};
