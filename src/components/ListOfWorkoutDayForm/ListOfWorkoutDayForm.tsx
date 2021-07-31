import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import useStyles from './ListOfWorkoutDayForm.styles';
import classnames from 'classnames';

import * as Moment from 'moment'
import {extendMoment} from 'moment-range'
const moment = extendMoment(Moment)

import {
    Button,
    Dialog,
    DialogContent
} from '@material-ui/core';

import { Workout, RootState } from '../../lib/types'

import WorkoutDayForm from '../WorkoutDayForm';

interface WorkoutFormProps {
    handleClose: Function;
    date: moment.Moment

}

const ListOfWorkoutDayForm = ({handleClose, date }: WorkoutFormProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workout)
 
    const [openF, setOpenF] = useState<boolean>(false)
    const handleOpenF = () => setOpenF(true)
    const handleCloseF = () => setOpenF(false)

    console.log("workouts", workouts)
    console.log("workout name", workouts[0].name)
    return (
        <div className={classes.root}>
            <span>Workouts</span>
            { Boolean(workouts?.length) && workouts.map((w: Workout, id: any) => 
                <div key={id}>
                    <Button
                        // className={}
                        color="primary"
                        variant="contained"
                        onClick={handleOpenF}
                    >
                        {w.name}
                    </Button>
                    <Dialog 
                        open={openF} 
                        onClose={handleCloseF}
                        >
                        <DialogContent>
                            <WorkoutDayForm 
                                date={date}
                                handleCloseF={handleCloseF} 
                                />
                        </DialogContent>
                    </Dialog>
                </div>
            )}
            <Button
                variant="contained"
            >
                Add Workout
            </Button>
        </div>
    )
}

export default ListOfWorkoutDayForm;