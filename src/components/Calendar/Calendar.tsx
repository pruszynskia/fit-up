import React, { useState } from "react";
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
    TextField
} from '@material-ui/core';


const Calendar = () => {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [open, setOpen] = React.useState(false);

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
                        <Card className={classnames(
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
                                classes.row
                            )}
                            >
                            <span>ExerciseInBodyPartIterable</span>
                            <TextField label="weight" />
                            <TextField label="reps" />
                            <TextField label="sets" />
                            </div>
                        </Card>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Calendar;