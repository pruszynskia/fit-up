import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Moment from 'moment'
import {extendMoment} from 'moment-range'

const moment = extendMoment(Moment)

import classnames from "classnames";
import useStyles from './Calendar.styles';

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

import { 
    IconButton,
    Dialog,
    DialogContent,
    Card,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Button
} from '@material-ui/core';

import DisplayCalendar from "./DisplayCalendar";
import { WorkoutDayDetails } from '../../lib/types'
import ExerciseListStyles from "../ExerciseList/ExerciseList.styles";

const Calendar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selectedDate, handleDateChange] = useState<any>(new Date());

    const [open, setOpen] = React.useState(false);

    const workouts = useSelector((state: any) => state.workout)

    // Form
    let [calendarFormData, setCalendarFormData] = useState<WorkoutDayDetails>();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_WORKOUT_DAY',
            payload: calendarFormData
        });
        handleClose();
    };

    // Calendar
    var days: number[] = []
    
        if(days.length == 0)
            for(let i=1; i <= 31; i++) days.push(i)
    
    // Utils
    var monthStart = moment().startOf("month")
    var monthEnd = moment().endOf("month")
    var monthDays = moment.range(monthStart, monthEnd)

    // Select
    const [wName, setWName] = React.useState<any>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWName(event.target.value as Object);
    };

    console.log("")
    console.log("workouts", workouts)
    console.log("calendarFormData", calendarFormData)
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
                        <form onSubmit={(e: any) => handleSubmit(e)}>
                            <div className={classnames(
                                classes.container,
                                classes.column
                                )}
                            >
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <DatePicker
                                        label="Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        animateYearScrolling
                                    />
                                </MuiPickersUtilsProvider>
                                <FormControl>
                                    <InputLabel>Workout</InputLabel>
                                    <Select
                                        id='id'
                                        value={wName}
                                        onChange={handleChange}    
                                    >
                                        {workouts.map((pos: any, id: any) => <MenuItem key={id} value={pos}>{pos.name}</MenuItem>)}    
                                    </Select>
                                </FormControl>
                                <div className={classnames(
                                    classes.container,
                                    classes.column,
                                    )}
                                >
                                    {Boolean(wName.exercises?.length) && wName.exercises.map((ex:any, key:any) => 
                                        <div key={key} 
                                            className={classnames(
                                                classes.container,
                                                classes.row
                                            )}
                                        >
                                            <span>{ex.name}</span>
                                            <TextField className={classes.offset}
                                                label="Weight" 
                                                type="number"
                                                variant="outlined"
                                                value={calendarFormData.exercises.map((ex: any) => ex)}
                                                onChange={(e: any) => 
                                                    setCalendarFormData({
                                                        ...calendarFormData,
                                                        exercises: calendarFormData.exercises.map((ex: any) => ex)
                                                    })
                                                    }                                              
                                                
                                            />
                                            <TextField className={classes.offset}
                                                label="Reps" 
                                                type="number"
                                                variant="outlined"
                                            />
                                            <TextField className={classes.offset}
                                                label="Sets" 
                                                type="number"
                                                variant="outlined"
                                            />
                                        </div>
                                    )}
                                </div>
                                

                            </div>
                            <Button type="submit">
                                Add
                            </Button>
                        </form>

                    </DialogContent>
                </Dialog>
            </div>

            

        </div>
    )
}

export default Calendar;