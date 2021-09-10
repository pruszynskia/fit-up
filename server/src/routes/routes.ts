import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get("/workouts",controllers.getAllWorkouts);
router.get("/workouts/:id", controllers.getWorkoutById);
router.post("/workouts", controllers.addWorkout);
router.put("/workouts/:id", controllers.updateWorkout);
router.delete("/workouts/:id", controllers.deleteWorkout);

export default router;