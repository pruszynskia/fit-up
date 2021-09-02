import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";
import moment from "moment";

// export interface BodyParts {
//     chest: string[];
//     back: string[];
//     arms: string[];
//     triceps: string[];
//     biceps: string[];
//     legs: string[];
//     calfes: string[];
//     abs: string[];
// }

export interface RootState {
    workout: Array<Workout>;
    workoutDays: Array<WorkoutDayDetails>
}

export interface Workout {
    id: string;
    name: string
    exercises: Array<Exercise>
}

export interface Exercise {
    name: string;
    bodyPart: string
}

export interface WorkoutDayDetails {
    id: string
    workoutID: string
    workoutName: string
    date: string;
    exercises: Array<WorkoutDayExerciseDetails>;
}

export interface WorkoutDayExerciseDetails {
    name: string;
    bodyPart: string
    sets: number;
    reps: number;
    weight: number;
    note?: string;
}







/**
 * [
 * {
 *  id: 1,
 *  workoutID: 'isteniejacy workout ID',
 *  workoutName: 'workout Name',
 *  date: '26072021',
 *  exercises: [
 *      {
 *          name: 'exercise 1',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      },
 *      {
 *          name: 'exercise 2',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      }
 *      ]
 * },
 * {
 *  id: 2,
 *  workoutID: 'isteniejacy workout ID',
 *  workoutName: 'workout Name 2',
 *  date: '26072021',
 *  exercises: [
 *      {
 *          name: 'exercise 1',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      },
 *      {
 *          name: 'exercise 2',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      }
 *      ]
 * },
 * {
 *  id: 3,
 *  workoutID: 'isteniejacy workout ID',
 *  workoutName: 'workout Name',
 *  date: '27072021',
 *  exercises: [
 *      {
 *          name: 'exercise 1',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      },
 *      {
 *          name: 'exercise 2',
 *          bodyPart: "body part",
 *          sets: 2,
 *          reps: 10,
 *          weight: 20,
 *          note: ""
 *      }
 *      ]
 * }
 * ]
 */