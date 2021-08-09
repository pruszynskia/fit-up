import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useStyles from './WorkoutDayForm.styles';
import classnames from 'classnames';
import moment from "moment";
import {v4} from 'uuid'

import {
    MenuItem,
    Select
} from '@material-ui/core';
import { RootState, WorkoutDayDetails } from "../../lib/types";

interface WorkoutDayForm {
    data?: WorkoutDayDetails;
    date: moment.Moment;
    handleCloseF: Function
}

export default function WorkoutDayForm({ data, date, handleCloseF }: WorkoutDayForm) {

    const workouts = useSelector((state: RootState) => state.workout)
    const initialState: WorkoutDayDetails = {
        id: data?.id || v4(),
        workoutID: workouts[0].id || data?.workoutID,
        workoutName: workouts[0].name || data?.workoutName,
        date: date.format("DDMMYYYY") || data?.date,
        exercises: workouts[0].exercises.map((ex: any) => ({
            name: ex.name,
            bodyPart: ex.bodyPart,
            sets: 0,
            reps: 0,
            weight: 0,
            note: ""
        })) || data?.exercises 
    }

    const classes = useStyles();

    let [selectedName, setSelectedName] = useState<string>(initialState.workoutName)

    // Select
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedName(event.target.value as string);
        // setWorkoutDayFormData({...workoutDayFormData, workoutName: event.target.value as string})
    };

    console.log("workouts", workouts)

    return (
        <div className={classes.root}>
            <div>{date.format("DD.MM.YYYY")}</div>
            <Select
                value={initialState.workoutName}
                // onChange={}
            >
                {workouts.map((pos: WorkoutDayDetails, id: any) => 
                    <MenuItem 
                        key={id} 
                        value={pos.workoutName}
                    >
                        {pos.workoutName}
                    </MenuItem>
                )}   
            </Select>

        </div>
    )
} 