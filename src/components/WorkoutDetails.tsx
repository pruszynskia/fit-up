import React, {useState} from 'react';
import classnames from 'classnames';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark
    }
}));
import {
    Button
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import ExerciseList from "./ExerciseList";
import WorkoutForm from "./WorkoutForm";

interface RootState {
    workout: any
}

const WorkoutDetails = () => {
    const [something, setSomething] = useState(false);
    const classes = useStyles();

    const a = 5;

    let data = useSelector((state: RootState) => state.workout)

    console.log("formData print", data);
    return (
        <div>
            <div>
                {data.map((pos: any) => pos.name)}
            </div>
            <button onClick={() => setSomething(true)}>click</button>
            <span className={classnames("material-icons", {
                [classes.root]: something
            })} >fingerprint</span>
        </div>
    )
}

export default WorkoutDetails;