import {
    ADD_WORKOUT,
    ADD_WORKOUT_DAY,
    DELETE_WORKOUT,
    DELETE_WORKOUT_DAY,
    EDIT_WORKOUT,
    EDIT_WORKOUT_DAY
} from '../actionTypes';

import {v4} from 'uuid';

import data from '../../../src/temp/workoutList.json'
import WorkoutDetailsStyles from '../../components/WorkoutDetails/WorkoutDetails.styles';
import {RootState, WorkoutDayDetails} from '../../lib/types'

const initialState: RootState = {
    workout: [],
    workoutDays: [],
}

export default function rootReducer(state: RootState = initialState, action: any) {
    switch(action.type) {
        case ADD_WORKOUT: {
            return {
                ...state,
                workout: [...state.workout, {id: v4(), ...action.payload}]
            };
        }
        case DELETE_WORKOUT: {
            return {
                ...state,
                workout: 
                    state.workout.filter((data: any) => data.id !== action.payload)
            };
        }
        case EDIT_WORKOUT: {
            return{
                ...state,
                workout:
                    state.workout.map((edit: any) => {
                        if (edit.id === action.payload.id) {
                            return action.payload;
                        } else {
                            return edit;
                        }
                    })
            };
        }
        case ADD_WORKOUT_DAY:{
            return {
                ...state,
                workoutDays: [...state.workoutDays, {id:v4(), ...action.payload}]
            };
        }
        case DELETE_WORKOUT_DAY:{
            return {
                ...state,
                workoutDays: 
                    state.workoutDays.filter((data: any) => data.id !== action.payload)
            };
        }

        case EDIT_WORKOUT_DAY:{
            return {
                ...state,
                workoutDays:
                    state.workoutDays.map((workout: WorkoutDayDetails) => {
                        if (workout.id === action.payload.id) {
                            return action.payload;
                        } else {
                            return workout;
                        }
                    })
            };
        }
        default:
            return state;
    }
}