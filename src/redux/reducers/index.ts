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
import {Exercise, WorkoutDayDetails} from '../../lib/types'


interface StateType {
    workout: Array<Exercise>;
    workoutDays: Array<WorkoutDayDetails>
}

const initialState: StateType = {
    workout: [],
    workoutDays: [],
}

export default function rootReducer(state: StateType = initialState, action: any) {
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
                        if (edit === action.payload.data.id) {
                            return action.payload.data;
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

        case "ADD_WORKOUT_DAY2": 
            return {
                ...state,
                workoutDays: [...state.workoutDays, action.payload]
            }

        case EDIT_WORKOUT_DAY:{
            return {
                ...state,
                workoutDays:
                    state.workoutDays.map((edit: any) => {
                        if (edit === action.payload.data.id) {
                            return action.payload.data;
                        } else {
                            return edit;
                        }
                    })
            };
        }
        default:
            return state;
    }
}