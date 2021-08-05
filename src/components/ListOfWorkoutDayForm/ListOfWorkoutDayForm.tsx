import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import useStyles from './ListOfWorkoutDayForm.styles';
import classnames from 'classnames';

import * as Moment from 'moment'
import {extendMoment} from 'moment-range'
const moment = extendMoment(Moment)

import {
    Button,
    IconButton,
    Dialog,
    DialogContent
} from '@material-ui/core';

import { RootState, Workout, WorkoutDayDetails } from '../../lib/types'

import WorkoutDayForm from '../WorkoutDayForm';

interface WorkoutFormProps {
    handleClose: Function;
    date: moment.Moment

}

const ListOfWorkoutDayForm = ({handleClose, date }: WorkoutFormProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workoutDays);
 
    const [openF, setOpenF] = useState<boolean>(false);
    const [openF2, setOpenF2] = useState<boolean>(false);
   
    const handleOpenF = () => setOpenF(true);
    const handleOpenF2 = (data) => setOpenF(true);
    const handleCloseF = () => setOpenF(false);
    const handleCloseF2 = () => setOpenF(false);

    // Remove workout button    
    const handleDelete = (id: any) => {
        dispatch({
            type: 'DELETE_WORKOUT_DAY',
            payload: id
        });
    }
    console.log("workouts", workouts)
    return (
        <div className={classes.root}>
            <span className={classnames(
                classes.container,
                classes.row,
                classes.title, 
                classes.bold
                )}
            >
                Workouts
            </span>
            
            { Boolean(workouts?.length) && workouts.filter((w: WorkoutDayDetails) => w.date === date.format("DDMMYYYY")).map((w: WorkoutDayDetails, id: any) => (
                <div key={id}>
                    <Button
                        // className={}
                        color="primary"
                        variant="contained"
                        onClick={() => handleOpenF2(w.id)}
                    >
                        {w.workoutName}
                    </Button>
                    <Dialog 
                        open={openF2} 
                        onClose={handleCloseF2}
                        >
                        <DialogContent>
                            <WorkoutDayForm 
                                // data={data}
                                date={date}
                                handleCloseF={handleCloseF2} 
                            />
                        </DialogContent>
                    </Dialog>
                    <IconButton className={classnames(
                        "material-icons",
                    )}
                        onClick={() => handleDelete(w.id)}
                    >
                        delete
                    </IconButton>
                </div>
            ))}
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
            <Button
            variant="contained"
            onClick={handleOpenF}
            >
                Add Workout
            </Button>
        </div>
    )
}

export default ListOfWorkoutDayForm;