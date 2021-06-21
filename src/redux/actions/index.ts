import { ADD_WORKOUT, DELETE_WORKOUT, EDIT_WORKOUT } from "../actionTypes";

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