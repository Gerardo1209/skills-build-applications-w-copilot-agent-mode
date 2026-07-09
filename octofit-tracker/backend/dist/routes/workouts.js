"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workout_1 = __importDefault(require("../models/workout"));
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    const workouts = await workout_1.default.find({});
    res.json(workouts);
});
exports.default = router;
