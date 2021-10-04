import rootReducer from "./index";
import * as actions from '../actions';

describe('root reducer', () => {
    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            workout: [],
            workoutDays: [],
            test: []
        });
    });

    it('should handle add workout test action', () => {
        const addWorkoutAction = {
            type: actions.addWorkoutTest
        };
        expect(rootReducer( {workout: [], workoutDays: [], test: [] }, addWorkoutAction)).toEqual({workout: [], workoutDays: [], test: [] })
    });
    
    it('should handle add workout test action', () => {
        const deleteWorkoutAction = {
            type: actions.deleteWorkoutTest
        };
        expect(rootReducer({ workout: [], workoutDays: [], test: [] }, deleteWorkoutAction)).toEqual({workout: [], workoutDays: [], test: [] })
    });
    
    it('should handle add workout test action', () => {
        const editWorkoutAction = {
            type: actions.editWorkoutTest
        };
        expect(rootReducer({ workout: [], workoutDays: [], test: [] }, editWorkoutAction)).toEqual({workout: [], workoutDays: [], test: [] })
    });
    
    it('should handle add workout day test action', () => {
        const addWorkoutDayAction = {
            type: actions.addWorkoutDayTest
        };
        expect(rootReducer({ workout: [], workoutDays: [], test: [] }, addWorkoutDayAction)).toEqual({ workout: [], workoutDays: [], test: []  })
    });
    
    it('should handle add workout day test action', () => {
        const deleteWorkoutDayAction = {
            type: actions.deleteWorkoutDayTest
        };
        expect(rootReducer({ workout: [], workoutDays: [], test: [] }, deleteWorkoutDayAction)).toEqual({ workout: [], workoutDays: [], test: [] })
    });
    
    it('should handle add workout day test action', () => {
        const editWorkoutDayAction = {
            type: actions.editWorkoutDayTest
        };
        expect(rootReducer({ workout: [], workoutDays: [], test: [] }, editWorkoutDayAction)).toEqual({ workout: [], workoutDays: [], test: [] })
    });

    
})