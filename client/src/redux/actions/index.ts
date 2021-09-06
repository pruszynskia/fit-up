import { ADD_WORKOUT, ADD_WORKOUT_DAY, DELETE_WORKOUT, DELETE_WORKOUT_DAY, EDIT_WORKOUT, EDIT_WORKOUT_DAY } from "../actionTypes";
import axios from 'axios'

const baseURL = "http://localhost:3001/"

export const addWorkout = (data: any) => ({
    type: ADD_WORKOUT,
    payload: data
});

export const testActionGetData = async (dispatch) => {
    try {
        const resp = await axios.get(baseURL + "workouts")
        console.log(resp)
        dispatch({
            type: "TEST_ACTION_GET_DATA",
            payload: resp.data.body
        })

    } catch (error) {
        console.log("testActionGetData", error)
        dispatch({
            type: "TEST_ERROR",
            payload: error
        })
    }
}

export const testActionAddData = async (dispatch, data) => {
    try {
        const resp = await axios.post(baseURL + "workouts", data, {
            headers: {
                'Content-Type': "application/json"
            }
        })

        dispatch({
            type: "TEST_ACTION_ADD_DATA",
            payload: resp.data.body
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: "TEST_ERROR",
            payload: error
        })
    }
}

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