"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppeteer = void 0;
const functions = require("@google-cloud/functions-framework");
const puppeteer_service_1 = __importDefault(require("./services/puppeteer.service"));
exports.puppeteer = functions.http("/puppeteer", async (req, res, next) => {
    try {
        await puppeteer_service_1.default.getStock();
    }
    catch (err) {
        next(err);
    }
    res.send("Success");
});
//# sourceMappingURL=index.js.map