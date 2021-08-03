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

import { RootState, Workout, WorkoutDayDetails } from '../../lib/types'

import WorkoutDayForm from '../WorkoutDayForm';
import OptionsMenuDay from '../common/OptionsMenuDay';

interface WorkoutFormProps {
    handleClose: Function;
    date: moment.Moment

}

const ListOfWorkoutDayForm = ({handleClose, date }: WorkoutFormProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const workouts = useSelector((state: RootState) => state.workoutDays);
 
    const [openF, setOpenF] = useState<boolean>(false);
    // const [openF2, setOpenF2] = useState<boolean>(false);
   
    const handleOpenF = () => setOpenF(true);
    // const handleOpenF2 = () => setOpenF(true);
    const handleCloseF = () => setOpenF(false);
    // const handleCloseF2 = () => setOpenF(false);

    console.log("workouts", workouts);
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
                        onClick={handleOpenF /**handleOpenF2 */}
                    >
                        {w.workoutName}
                    </Button>
                    {/* <Dialog 
                        open={openF} 
                        onClose={handleCloseF2}
                        >
                        <DialogContent>
                            <WorkoutDayForm 
                                data={data}
                                date={date}
                                handleCloseF={handleCloseF2} 
                            />
                        </DialogContent>
                    </Dialog> */}
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