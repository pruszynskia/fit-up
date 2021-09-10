import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get("/workouts",controllers.getAllWorkouts);
router.get("/workouts/:id", controllers.getWorkoutById);
router.post("/workouts", controllers.addWorkout);
router.put("/workouts/:id", controllers.updateWorkout);
router.delete("/workouts/:id", controllers.deleteWorkout);

router.get("/workouts-day",controllers.getAllWorkoutDay);
router.get("/workouts-day/:id", controllers.getWorkoutDayById);
router.post("/workouts-day", controllers.addWorkoutDay);
router.put("/workouts-day/:id", controllers.updateWorkoutDay);
router.delete("/workouts-day/:id", controllers.deleteWorkoutDay);

export default router;