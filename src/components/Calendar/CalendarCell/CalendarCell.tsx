import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import moment from 'moment'

import useStyles from './CalendarCell.styles'
import classnames from 'classnames';

import {
    Dialog,
    DialogContent,
} from '@material-ui/core';

import ListOfWorkoutDayForm from '../../ListOfWorkoutDayForm';
import {RootState, WorkoutDayDetails} from '../../../lib/types'


interface CalendarCellProps {
    date: moment.Moment;
    selectedDay: any;
    handleDayClick: Function
}

export default function CalendarCell({date, selectedDay, handleDayClick}: CalendarCellProps) {
    const classes = useStyles()

    const data = useSelector((state: RootState) => state.workoutDays)
                                 .filter((ex: WorkoutDayDetails) => ex.date === date.format("DDMMYYYY"))

    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return <div>
        <span
            onClick={() => handleDayClick(date)}
            className={classnames(classes.day, {
                [classes.selected]:
                date.format("DDMMYYYY") === selectedDay.format("DDMMYYYY"),
                [classes.today]:
                date.format("DDMMYYYY") === moment().format("DDMMYYYY"),
            })}
        >
            <div className={classnames({
                    [classes.hasData]: Boolean(data.length),
                    })} 
                onClick={handleOpen}
            >
                {date.format("DD")}
            </div>

            <div className={classnames(
                    classes.container,
                    classes.column, 
                )}
            >
                <Dialog
                    open={open} 
                    onClose={handleClose} 
                >
                    <DialogContent>
                        <ListOfWorkoutDayForm 
                            date={date} 
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </span>
    </div>
}