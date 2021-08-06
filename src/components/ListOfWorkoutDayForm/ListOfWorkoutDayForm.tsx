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
    data?: any;
    date: moment.Moment

}

const ListOfWorkoutDayForm = ({ data, date }: WorkoutFormProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workoutDays);
 
    const [openF, setOpenF] = useState<boolean>(false);
    const [openEdit, setEditOpen] = useState<boolean>(false);
    const [, updateState] = useState({});

    const forceUpdate = React.useCallback(() => updateState({}), []);
   
    const handleOpenF = () => setOpenF(true);
    const handleCloseF = () => setOpenF(false);
    const handleEditOpen = (data) => {
        setEditOpen(true);
        // dispatch({
        //     type: 'EDIT_WORKOUT_DAY',
        //     payload: edit
        // });
    };
    const handleEditClose = () => {
        setEditOpen(false);
        forceUpdate();
    }

    // Remove workout button    
    const handleDelete = (id: any) => {
        dispatch({
            type: 'DELETE_WORKOUT_DAY',
            payload: id
        });
    }
    // console.log("workouts", workouts)
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
                        onClick={handleEditOpen}
                    >
                        {w.workoutName}
                    </Button>
                    <Dialog 
                        open={openEdit} 
                        onClose={handleEditClose}
                        >
                        <DialogContent>
                            <WorkoutDayForm 
                                data={w}
                                date={date}
                                handleCloseF={handleEditClose} 
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