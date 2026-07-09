import express from 'express';
import Leaderboard from '../models/leaderboard';

const router = express.Router();

router.get('/', async (_req, res) => {
  const items = await Leaderboard.find({});
  res.json(items);
});

export default router;
