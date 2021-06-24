import React, { useState } from 'react';

import WorkoutForm from './WorkoutForm';

import { fitUpStyles } from '../../src/styles/common';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';


const ExerciseList = ( {formData, setFormData, handleSubmit}: any ) => {
    
    const styles = fitUpStyles();
    
    //Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    const handleForm = () => {
        setOpen(false);
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
                        
                        <WorkoutForm 

                    />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" onClick={handleForm} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
};

export default ExerciseList;