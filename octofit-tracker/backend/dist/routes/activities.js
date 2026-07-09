"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activity_1 = __importDefault(require("../models/activity"));
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    const activities = await activity_1.default.find({});
    res.json(activities);
});
exports.default = router;
