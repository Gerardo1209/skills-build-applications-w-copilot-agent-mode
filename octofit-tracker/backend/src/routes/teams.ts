import express from 'express';
import Team from '../models/team';

const router = express.Router();

router.get('/', async (_req, res) => {
  const teams = await Team.find({});
  res.json(teams);
});

export default router;
