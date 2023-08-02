import path from "path";
import fs from "fs";

export const CREDENTIALS_PATH = path.join(process.cwd(), "sa.json");

export const credentials = JSON.parse(
  fs.readFileSync(CREDENTIALS_PATH, "utf8")
);
