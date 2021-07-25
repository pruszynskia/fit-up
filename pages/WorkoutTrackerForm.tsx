import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../src/components/WorkoutTrackerForm/WorkoutTrackerForm.styles';
import classnames from 'classnames';
import Calendar from '../src/components/Calendar/Calendar';

const WorkoutTrackerForm = () => {
    const classes = useStyles();
    const workouts = useSelector((state: any) => state.workout);
    console.log("Workouts", workouts)
    if(Boolean(workouts.length)) return(
        <div className={classes.root}>
            <div>
                <span><strong>name: </strong>{workouts[0].name}</span><br />
                <span><strong>date: </strong>16-07-2021</span>
            </div>
            <div>
                <span>{workouts[0].chest[0].name}</span><br />
                <span>Add sets</span><br />
                <span>Add reps</span><br />
            </div>
            <div>
                <span>{workouts[0].chest[1].name}</span><br />
                <span>Add sets</span><br />
                <span>Add reps</span><br />
            </div>
            
        </div> 
    )
    else return <div />
}
export default WorkoutTrackerForm;