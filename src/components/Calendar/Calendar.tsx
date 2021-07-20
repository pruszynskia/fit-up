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


const Calendar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selectedDate, handleDateChange] = useState<any>(new Date());

    const [open, setOpen] = React.useState(false);
    const workouts = useSelector((state: any) => state.workout)

    let [calendarFormData, setCalendarFormData] = useState<any>();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_WORKOUT',
            payload: calendarFormData
        });
        handleClose();
    };

    // Calendar
    var days: number[] = []
    
        if(days.length == 0)
            for(let i=1; i<= 31; i++) days.push(i)
    
    var monthStart = moment().startOf("month")
    var monthEnd = moment().endOf("month")
    var monthDays = moment.range(monthStart, monthEnd)

    console.log("days", days)

    return (
        <div className={classes.root}>
            <div className={classnames(
                classes.container,
                classes.column,
                classes.offset
            )}>
                <span>Display Calendar</span>
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
                        {/* <form onSubmit={(e: any) => handleSubmit(e)}>
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
                                    
                                    >
                                        <MenuItem>WorkoutNameIterable</MenuItem>    
                                    </Select>
                                </FormControl>
                                <span>BodyPartIterable</span>
                                <div className={classnames(
                                    classes.container,
                                    classes.row,
                                    )}
                                >
                                    <span>ExerciseInBodyPartIterable</span>
                                    <TextField className={classes.offset} label="weight" />
                                    <TextField className={classes.offset} label="reps" />
                                    <TextField className={classes.offset} label="sets" />
                                </div>
                            </div>
                            <Button type="submit">
                                Add
                            </Button>
                        </form> */}

                        {/* <div>
                            <div>
                                <span><strong>name: </strong>{workouts[0].name}</span><br />
                                <span><strong>date: </strong>16-07-2021</span>
                            </div>
                            <div>
                                <span>{workouts[0].chest[0].name}</span><br />
                                <span>Add sets</span><br />
                                <span>Add reps</span><br />
                            </div>
                            <div>
                                <span>{workouts[0].chest[1].name}</span><br />
                                <span>Add sets</span><br />
                                <span>Add reps</span><br />
                            </div>
                            
                        </div> */}
                    </DialogContent>
                </Dialog>
            </div>

            {/* Calendar */}
            <Card>
            <div className={classes.gRoot} >
                {days.map((d: any) => (
                    <div key={d} className={classnames(
                        classes.container,
                    )}
                    >
                        <Button>{d}</Button>
                    </div>
                ))}
            </div>
            </Card>
        </div>
    )
}

export default Calendar;