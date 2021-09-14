import rootReducer from ".";
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
        expect(rootReducer({}, addWorkoutAction)).toEqual({ workout: [] })
    });
    
    it('should handle add workout test action', () => {
        const deleteWorkoutAction = {
            type: actions.deleteWorkoutTest
        };
        expect(rootReducer({}, deleteWorkoutAction)).toEqual({ workout: [] })
    });
    
    it('should handle add workout test action', () => {
        const editWorkoutAction = {
            type: actions.editWorkoutTest
        };
        expect(rootReducer({}, editWorkoutAction)).toEqual({ workout: [] })
    });
    
    it('should handle add workout day test action', () => {
        const addWorkoutDayAction = {
            type: actions.addWorkoutDayTest
        };
        expect(rootReducer({}, addWorkoutDayAction)).toEqual({ workoutDay: [] })
    });
    
    it('should handle add workout day test action', () => {
        const deleteWorkoutDayAction = {
            type: actions.deleteWorkoutDayTest
        };
        expect(rootReducer({}, deleteWorkoutDayAction)).toEqual({ workoutDay: [] })
    });
    
    it('should handle add workout day test action', () => {
        const editWorkoutDayAction = {
            type: actions.editWorkoutDayTest
        };
        expect(rootReducer({}, editWorkoutDayAction)).toEqual({ workoutDay: [] })
    });

    
})