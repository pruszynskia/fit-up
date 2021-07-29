import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import useStyles from './WorkoutDayForm.styles';
import classnames from 'classnames';

import * as Moment from 'moment'
import {extendMoment} from 'moment-range'
const moment = extendMoment(Moment)

import {
    Button,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
} from '@material-ui/core';

import { WorkoutDayDetails, WorkoutDayExerciseDetails, Workout, RootState } from '../../lib/types'

interface WorkoutFormProps {
    handleClose: Function;
    data?: any;
    date: moment.Moment

}

const WorkoutDayForm = ({ handleClose, data, date }: WorkoutFormProps) => {
    const initialState: WorkoutDayDetails = {
        id: "",
        workoutID: "",
        workoutName: "",
        date: date.format("DDMMYYYY"),
        exercises: [{
            name: "",
            bodyPart: "",
            sets: 0,
            reps: 0,
            weight: 0,
            note: ""
        }]
    }

    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workout)
    
    // Form
    const [wName, setWName] = React.useState<string>(workouts[0]?.name || '');
    let [workoutDayFormData, setWorkoutDayFormData] = useState<WorkoutDayDetails>(data ? data : initialState);
    var selectedWorkout = workouts.filter((w: Workout) => w.name === wName)[0]
 
    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_WORKOUT_DAY',
            payload: workoutDayFormData
        });
        handleClose();
    };

     // Calendar
     var days: number[] = []
    
     if(days.length == 0)
         for(let i=1; i <= 31; i++) days.push(i)
    

    // Select

    useEffect(() => {
     selectedWorkout = workouts.filter((w: Workout) => w.name === wName)[0]
    }, [wName])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWName(event.target.value as string);
    };

    console.log("selectedWorkout", selectedWorkout)
    console.log("workoutDayFormData", workoutDayFormData)
    console.log("date", date)
    return (
        <div className={classes.root}>
            <form onSubmit={(e: any) => handleSubmit(e)}>
                <div className={classnames(
                    classes.container,
                    classes.column
                    )}
                >
                    <span>{date.format("DD.MM.YYYY")}</span>
                    <FormControl>
                        <InputLabel>Workout</InputLabel>
                        <Select
                            id='id'
                            value={wName}
                            onChange={handleChange}    
                        >
                            {workouts.map((pos: Workout, id: any) => <MenuItem key={id} value={pos.name}>{pos.name}</MenuItem>)}    
                        </Select>
                    </FormControl>
                    <div className={classnames(
                        classes.container,
                        classes.column,
                        )}
                    >
                        {Boolean(selectedWorkout?.exercises?.length) && 
                                selectedWorkout.exercises.map((ex: WorkoutDayExerciseDetails) => 
                            <div key={ex.name} 
                                className={classnames(
                                    classes.container,
                                    classes.row
                                )}
                            >
                                <span>{ex.name}</span>
                                <TextField className={classes.offset}
                                    label="Weight" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.weight}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => (
                                                {
                                                    ...el,
                                                    weight: e.target.value
                                                }
                                                )
                                            ),
                                        })
                                        }                                              
                                    
                                />
                                <TextField className={classes.offset}
                                    label="Reps" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.sets}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => (
                                                {
                                                    ...el,
                                                    reps: e.target.value
                                                }
                                            )),
                                        })
                                        }    
                                />
                                <TextField className={classes.offset}
                                    label="Sets" 
                                    type="number"
                                    variant="outlined"
                                    value={ex.weight}
                                    onChange={(e: any) => 
                                        setWorkoutDayFormData({
                                            ...workoutDayFormData,
                                            exercises: workoutDayFormData.exercises.map((el: WorkoutDayExerciseDetails) => (
                                                {
                                                    ...el,
                                                    sets: e.target.value
                                                }
                                            )),
                                        })
                                        }    
                                />
                            </div>
                        )}
                    </div>
                                

                            </div>
                            <Button type="submit">
                                Add
                            </Button>
                        </form>
        </div>
    )
}

export default WorkoutDayForm;