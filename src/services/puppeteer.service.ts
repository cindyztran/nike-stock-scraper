import puppeteer from "puppeteer";

const getStock = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto(
    "https://www.nike.com/t/air-monarch-iv-mens-training-shoes-G5Xn1k/415445-102"
  );

  const id = "#skuAndSize__29304480";
  const isDisabled = await page.$eval(id, (el: any) => {
    if (!el) {
      throw new Error(`No element with id: ${id} found`);
    }
    return el.disabled;
  });
  console.log({ isDisabled });
};

export default {
  getStock,
};
