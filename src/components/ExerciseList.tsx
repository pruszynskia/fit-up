import React, { useState } from 'react';
import workoutList from '../../src/temp/workoutList.json';
import { FitUpStyles } from '../../src/styles/common';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Checkbox
} from '@material-ui/core';


const ExerciseList = () => {
    const styles = FitUpStyles();
    const data = workoutList;

    //Form
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
                        <div>
                        
                            <h3>Chest</h3>
                            {data.chest.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Back</h3>
                            {data.back.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Arms</h3>
                            {data.arms.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Triceps</h3>
                            {data.triceps.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Biceps</h3>
                            {data.biceps.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Legs</h3>
                            {data.legs.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Calfes</h3>
                            {data.calfes.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                            <h3>Abs</h3>
                            {data.abs.map((exercise: any, id: any) => 
                                    <div key={id}>
                                        <Checkbox 
                                        />
                                        {exercise}
                                    </div>
                            )}
                        
                        </div>
                           
                        
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <h2>Chest</h2>
            {data.chest.map((bodyPart, id) => {
                return (
                    <div key={id}
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            
            <h2>Back</h2>
            {data.back.map((bodyPart, id) => {
                return (
                    <div key={id}
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            
            <h2>Arms</h2>
            {data.arms.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            
            <h2>Triceps</h2>
            {data.triceps.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            <h2>Biceps</h2>
            {data.biceps.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            <h2>Legs</h2>
            {data.legs.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            <h2>Calfes</h2>
            {data.calfes.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}
            <h2>Abs</h2>
            {data.abs.map((bodyPart, id) => {
                return (
                    <div key={id} 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                    </div>
                )
            })}


        </div>
    )
};

export default ExerciseList;