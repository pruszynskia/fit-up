import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import useStyles from './WorkoutDayForm.styles';
import classnames from 'classnames';

import * as Moment from 'moment'
import {extendMoment} from 'moment-range'
const moment = extendMoment(Moment)
import {v4} from 'uuid'

import {
    Button,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
} from '@material-ui/core';

import { WorkoutDayDetails, WorkoutDayExerciseDetails, Workout, RootState } from '../../lib/types'

interface WorkoutDayFormProps {
    handleCloseF: Function;
    data?: WorkoutDayDetails;
    date: moment.Moment

}

const WorkoutDayForm = ({ handleCloseF, data, date }: WorkoutDayFormProps) => {
    
    const edit = Boolean(data)
    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workout)
    
    // Form
    const [wName, setWName] = React.useState<string>(data?.workoutName || workouts[0]?.name || '');

    const initialState: WorkoutDayDetails = {
        id: data?.id || v4(),
        workoutID: data?.workoutID || workouts[0].id,
        workoutName: data?.workoutName || workouts[0].name,
        date: data?.date || date.format("DDMMYYYY"),
        exercises: data?.exercises || workouts[0].exercises.map((ex: any) => ({
            name: ex.name,
            bodyPart: ex.bodyPart,
            sets: 0,
            reps: 0,
            weight: 0,
            note: ""
        }))
    }

    let [workoutDayFormData, setWorkoutDayFormData] = useState<WorkoutDayDetails>(data ? data : initialState);
    var selectedWorkout = initialState
 
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(edit) {
            dispatch({
                type: 'EDIT_WORKOUT_DAY',
                payload: workoutDayFormData
            })
        }
        else {
            dispatch({
                type: 'ADD_WORKOUT_DAY',
                payload: workoutDayFormData
            });
        }
        handleCloseF();
    };

     // Calendar
     var days: number[] = []
    
     if(days.length == 0)
         for(let i=1; i <= 31; i++) days.push(i)
    
    // Select
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWName(event.target.value as string);
        setWorkoutDayFormData({...workoutDayFormData, workoutName: event.target.value as string})
    };

    return (
        <div className={classes.root}>
            <span>{edit ? "EDIT WORKOUT" : "ADD WORKOUT"}</span>
            <form onSubmit={(e: any) => handleSubmit(e)}>
                <div className={classnames(
                    classes.container,
                    classes.column
                    )}
                >
                    <span>
                        {date.format("DD.MM.YYYY")}
                    </span>
                    <FormControl>
                        <InputLabel>Workout</InputLabel>
                        <Select
                            id='id'
                            value={selectedWorkout.workoutName}
                            onChange={handleChange}    
                        >
                            {workouts.map((pos: Workout, id: any) => 
                                <MenuItem 
                                    key={id} 
                                    value={pos.name}
                                >
                                    {pos.name}
                                </MenuItem>
                                )}    
                        </Select>
                    </FormControl>
                    <div className={classnames(
                        classes.container,
                        classes.column,
                        )}
                    >
                        {Boolean(workoutDayFormData?.exercises?.length) && 
                                workoutDayFormData.exercises.map((ex: WorkoutDayExerciseDetails) => 
                            <div key={ex.name} 
                                className={classnames(
                                    classes.container,
                                    classes.row
                                )}
                            >
                                <span
                                    // onChange={() => 
                                    //     setWorkoutDayFormData({
                                    //         ...workoutDayFormData,
                                    //         workoutName: //workoutDayFormData.workoutName
                                    //     })
                                       
                                >{ex.name}</span>
                                <TextField className={classes.offset}
                                    label="Weight" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.weight}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => {
                                                
                                                if(el.name === ex.name){
                                                     return {
                                                        ...el,
                                                        weight: e.target.value
                                                    } 
                                                } else {
                                                    return {
                                                        ...ex
                                                    }
                                                }
                                            }),
                                        })
                                        }                                              
                                />
                                <TextField className={classes.offset}
                                    label="Reps" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.reps}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => {
                                                
                                                if(el.name === ex.name){
                                                     return {
                                                        ...el,
                                                        reps: e.target.value
                                                    } 
                                                } else {
                                                    return {
                                                        ...ex
                                                    }
                                                }
                                            }),
                                        })
                                        }         
                                />
                                <TextField className={classes.offset}
                                    label="Sets" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.sets}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => {
                                                
                                                if(el.name === ex.name){
                                                     return {
                                                        ...el,
                                                        sets: e.target.value
                                                    } 
                                                } else {
                                                    return {
                                                        ...ex
                                                    }
                                                }
                                            }),
                                        })
                                        }         
                                />
                            </div>
                        )}
                    </div>
                </div>
                <Button type="submit">
                    {edit ? "EDIT" : "ADD"}
                </Button>
            </form>
        </div>
    )
}

export default WorkoutDayForm;