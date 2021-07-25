import React from "react";
import classnames from "classnames";
import useStyles from './CurrentWorkouts.styles';
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import DialogButton from "../common/DialogButton/DialogButton";
import WorkoutDetails from '../WorkoutDetails'
import WorkoutTrackerForm from "../WorkoutTrackerForm";

const CurrentWorkout = () => {
    const classes = useStyles();
    const router = useRouter();

    const data = useSelector((state: any) => state.workout)
    return (
    <div className={classnames(classes.root, classes.column)}>
        {
            data.map((w: any, id: any) => (
                <DialogButton key={id} label={w.name}>
                    <WorkoutDetails workout={w} />
                </DialogButton>
            ))
        }
        <WorkoutTrackerForm />
    </div>
    )
  }
  
  export default CurrentWorkout