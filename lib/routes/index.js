"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const general_routes_1 = __importDefault(require("./general.routes"));
const puppeteer_routes_1 = __importDefault(require("./puppeteer.routes"));
const gmail_routes_1 = __importDefault(require("./gmail.routes"));
const router = (0, express_1.Router)();
router.use("/", general_routes_1.default);
router.use("/puppeteer", puppeteer_routes_1.default);
router.use("/gmail", gmail_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map