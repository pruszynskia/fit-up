import React from "react";
import classnames from "classnames";
import useStyles from './CurrentWorkouts.styles';
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import DialogButton from "../common/DialogButton/DialogButton";
import WorkoutDetails from '../WorkoutDetails'

const CurrentWorkout = () => {
    const classes = useStyles();
    const router = useRouter();

    const {workout} = useSelector((state: any) => state)
    return (
    <div className={classnames(classes.root, classes.column)}>
        {
            workout.map((w: any, id: any) => (
                <DialogButton key={id} label={w.name}>
                    <WorkoutDetails workout={w} />
                </DialogButton>
            ))
        }
    </div>
    )
  }
  
  export default CurrentWorkout