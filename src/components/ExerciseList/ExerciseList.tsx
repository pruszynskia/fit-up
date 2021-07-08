import React, { useState } from 'react';
import {useDispatch} from 'react-redux'

import WorkoutForm from '../WorkoutForm/WorkoutForm';

import useStyles from '../../styles/common';
import classnames from 'classnames';

import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';


const ExerciseList = () => {
    
    const classes = useStyles();
    const dispatch = useDispatch()
    
    //Dialog
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                <Button variant="outlined" color="primary" onClick={handleOpen}>
                    New Workout Template
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Exercise List</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Choose exercise from the list:
                    </DialogContentText>
                        <WorkoutForm handleClose={handleClose} />
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
};

export default ExerciseList;