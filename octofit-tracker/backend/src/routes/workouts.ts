import express from 'express';
import Workout from '../models/workout';

const router = express.Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});

export default router;
