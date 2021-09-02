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
export interface Exercise {
    name: string;
    bodyPart: string
}

export interface WorkoutDayDetails {
    workoutName: string
    date: string;
    exercises: Array<{
        name: string;
        bodyPart: string
        sets: number;
        reps: number;
        weight: number;
        note: string;
    }>;
}

export interface Workout {
    name: string
    exercises: Array<Exercise>
}
