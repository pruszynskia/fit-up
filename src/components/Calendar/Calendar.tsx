import React, { useState } from "react";

import classnames from "classnames";
import useStyles from './Calendar.styles';

import { 
    IconButton,
    Dialog,
    DialogContent,
} from '@material-ui/core';

import DisplayCalendar from "./DisplayCalendar";
import WorkoutDayForm from '../WorkoutDayForm';

const Calendar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    // Form
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    return (
        <div className={classes.root}>
            <div className={classnames(
                classes.container,
                classes.column,
                classes.offset
            )}>
                <DisplayCalendar formOpen={handleClickOpen}/>
                <IconButton
                    aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={handleClickOpen}
                    >
                    <span className="material-icons">add</span>
                </IconButton>
            </div>
            <div className={classnames(
                classes.container,
                classes.column
            )}>
                <Dialog
                     open={open} 
                     onClose={handleClose} 
                >
                    <DialogContent>
                        <WorkoutDayForm handleClose={handleClose}/>
                    </DialogContent>
                </Dialog>
            </div>

            

        </div>
    )
}

export default Calendar;