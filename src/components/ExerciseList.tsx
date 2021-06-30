import React, { useState } from 'react';
import {useDispatch} from 'react-redux'

import WorkoutForm from './WorkoutForm';

import useStyles from '../../src/styles/common';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';


const ExerciseList = () => {
    
    const styles = useStyles();
    const dispatch = useDispatch()
    
    //Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e: any, formData: any) => {
        e.preventDefault();
        console.log("formData submited", formData);

        dispatch({
            type: 'ADD_WORKOUT',
            payload: formData
        });
    };
    const handleForm = (e: any, formData: any) => {
        setOpen(false);
        handleSubmit(e, formData);
    } 

    return (
        <div>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    New Workout Template
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Exercise List</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Choose exercise from the list:
                    </DialogContentText>
                        
                        <WorkoutForm handleForm={handleForm}

                    />
                        
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
};

export default ExerciseList;