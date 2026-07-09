import express from 'express';
import Activity from '../models/activity';

const router = express.Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find({});
  res.json(activities);
});

export default router;
