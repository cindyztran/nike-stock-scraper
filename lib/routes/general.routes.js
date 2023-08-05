"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const general_service_1 = __importDefault(require("../services/general.service"));
const router = (0, express_1.Router)();
router.get("/heartbeat", async (req, res, next) => {
    try {
        const data = await general_service_1.default.get();
        res.json(data);
    }
    catch (err) {
        return next(err);
    }
});
exports.default = router;
//# sourceMappingURL=general.routes.js.map