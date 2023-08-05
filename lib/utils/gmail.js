"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.CREDENTIALS_PATH = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.CREDENTIALS_PATH = path_1.default.join(process.cwd(), "sa.json");
exports.credentials = JSON.parse(fs_1.default.readFileSync(exports.CREDENTIALS_PATH, "utf8"));
//# sourceMappingURL=gmail.js.map