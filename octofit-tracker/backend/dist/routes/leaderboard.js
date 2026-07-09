"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    const items = await leaderboard_1.default.find({});
    res.json(items);
});
exports.default = router;
