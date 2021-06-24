import {
    ADD_WORKOUT,
    DELETE_WORKOUT,
    EDIT_WORKOUT,
    SET_VISIBILITY_FILTER
} from '../actionTypes';

import {v4} from 'uuid';

import data from '../../../src/temp/workoutList.json'

const initialState = {
    workout: data,
    visibilityFilters: {
        addJobOfferFilter: false,
        editJobOfferFilter: false
    }
}

export default function rootReducer(state:any = initialState, action: any) {
    switch(action.type) {
        case ADD_WORKOUT: {
            console.log("add workout")
            return {
                ...state,
                workout: [...state.workout, {id: v4(), ...action.payload}]
            };
        }
        case DELETE_WORKOUT: {
            console.log("delete workout", action.payload)
            return {
                ...state,
                workout: 
                    state.workout.filter((data: any) => data.id !== action.payload)
            };
        }
        case EDIT_WORKOUT: {
            console.log("edit workout")
            return{
                ...state,
                workout:
                    state.workout.map((edit: any) => {
                        if (edit === action.payload.data.id) {
                            return action.payload.data;
                        } else {
                            return edit;
                        }
                    }),
            };
        }

        // VISIBILITY_FILTER
        case SET_VISIBILITY_FILTER: {
            return {
                ...state,
                visibilityFilters: {
                    ...state.visibilityFilters,
                    ...action.payload
                }
            }
        }
        
        default:
            return state;
    }
}