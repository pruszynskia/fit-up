import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useStyles from './WorkoutDayForm.styles';
import classnames from 'classnames';
import moment from "moment";
import {v4} from 'uuid'

import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';
import { RootState, Workout, WorkoutDayDetails, WorkoutDayExerciseDetails } from "../../lib/types";
import { addWorkoutDayTest, editWorkoutDayTest } from "../../redux/actions";

interface WorkoutDayForm {
    data?: WorkoutDayDetails;
    date: moment.Moment;
    handleCloseF: Function
}

export default function WorkoutDayForm({ data, date, handleCloseF }: WorkoutDayForm) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const edit = Boolean(data);
    const workouts = useSelector((state: RootState) => state.workout)

    const initialState: WorkoutDayDetails = {
        id: data?.id || v4(),
        workoutID:data?.workoutID || workouts[0]?.id,
        workoutName: data?.workoutName || workouts[0]?.name,
        date: data?.date || date.format("DDMMYYYY"),
        exercises: workouts[0]?.exercises.map((ex: any) => ({
            name: ex.name,
            bodyPart: ex.bodyPart,
            sets: 0,
            reps: 0,
            weight: 0,
            note: ""
        })) 
    }


    let [selectedName, setSelectedName] = useState<string>(initialState.workoutName)
    let [workoutDayFormData, setWorkoutDayFormData] = useState<WorkoutDayDetails>(data ? data : initialState);

    // Select
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedName(event.target.value as string);
        setWorkoutDayFormData({
            id: workouts.filter((w: Workout) => w.name === event.target.value as string)[0].id,
            workoutID: workouts.filter((w: Workout) => w.name === event.target.value as string)[0].id,
            workoutName: workouts.filter((w: Workout) => w.name === event.target.value as string)[0].name,
            date: date.format("DDMMYYYY"),
            exercises: workouts.filter((w: Workout) => w.name === event.target.value as string)[0].exercises.map((ex: any) => ({
                name: ex.name,
                bodyPart: ex.bodyPart,
                sets: 0,
                reps: 0,
                weight: 0,
                note: ""
            })) 
        })
    };

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();

    //     if(edit) {
    //         dispatch({
    //             type: "EDIT_WORKOUT_DAY",
    //             payload: workoutDayFormData
    //         })
    //     } else {
    //         dispatch({
    //             type: "ADD_WORKOUT_DAY",
    //             payload: workoutDayFormData
    //         });
    //     };
    //     handleCloseF();
    // }
    
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(edit) {
            editWorkoutDayTest(dispatch, workoutDayFormData)
        } else {
            addWorkoutDayTest(dispatch, workoutDayFormData)
        }
        handleCloseF();
    };

    console.log("workouts", workouts[0]?.id)
    console.log("workoutDayFormData", workoutDayFormData)
    console.log("data", data)

    return (
        <div className={classes.root}>
            <span>{edit ? "EDIT WORKOUT" : "ADD WORKOUT"}</span>
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
                            defaultValue=""
                            onChange={handleChange}
                            value={selectedName}
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
                                    <span>{ex.name}</span>
                                    <TextField className={classes.offset}
                                        label="Weight"
                                        type="number"
                                        variant="outlined"
                                        value={ex.weight}
                                        onChange={(e: any) =>
                                            setWorkoutDayFormData({
                                                ...workoutDayFormData,
                                                exercises: workoutDayFormData.exercises.map((el:WorkoutDayExerciseDetails) => {
                                                    if(el.name === ex.name) {
                                                        return {
                                                            ...el,
                                                            weight: e.target.value
                                                        }
                                                    } else {
                                                        return {
                                                            ...el
                                                        }
                                                    }
                                                })
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
                                                exercises: workoutDayFormData.exercises.map((el:WorkoutDayExerciseDetails) => {
                                                    if(el.name === ex.name) {
                                                        return {
                                                            ...el,
                                                            reps: e.target.value
                                                        }
                                                    } else {
                                                        return {
                                                            ...el
                                                        }
                                                    }
                                                })
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
                                                exercises: workoutDayFormData.exercises.map((el:WorkoutDayExerciseDetails) => {
                                                    if(el.name === ex.name) {
                                                        return {
                                                            ...el,
                                                            sets: e.target.value
                                                        }
                                                    } else {
                                                        return {
                                                            ...el
                                                        }
                                                    }
                                                })
                                            })
                                        }
                                        />
                                </div>
                            )
                        }
                    </div>
                    <Button type="submit">
                        {edit ? "EDIT" : "ADD"}
                    </Button>
                </div>
            </form>
        </div>
    )
}