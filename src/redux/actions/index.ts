import { ADD_WORKOUT, ADD_WORKOUT_DAY, DELETE_WORKOUT, DELETE_WORKOUT_DAY, EDIT_WORKOUT, EDIT_WORKOUT_DAY } from "../actionTypes";

export const addWorkout = (data: any) => ({
    type: ADD_WORKOUT,
    payload: data
});

export const deleteWorkout = (id: any) => ({
    type: DELETE_WORKOUT,
    payload: id
});

export const editWorkout = (data:any) => ({
    type: EDIT_WORKOUT,
    payload: data
});

export const addWorkoutDay = (data: any) => ({
    type: ADD_WORKOUT_DAY,
    payload: data
});

export const deleteWorkoutDay = (id: any) => ({
    type: DELETE_WORKOUT_DAY,
    payload: id
});

export const editWorkoutDay = (data:any) => ({
    type: EDIT_WORKOUT_DAY,
    payload: data
});