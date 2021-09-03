import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get("/workouts",controllers.getAllWorkouts);

export default router;