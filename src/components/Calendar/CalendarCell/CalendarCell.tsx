import React, {useState} from 'react'
import moment from 'moment'

import useStyles from './CalendarCell.styles'
import classnames from 'classnames';

import {
    Dialog,
    DialogContent,
} from '@material-ui/core';

import WorkoutDayForm from '../../WorkoutDayForm';

interface CalendarCellProps {
    date: moment.Moment
}

export default function CalendarCell({date}: CalendarCellProps) {
    const classes = useStyles()

    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return <div>
        <div onClick={handleOpen}>{date.format("DD")}</div>
        <div className={classnames(
                classes.container,
                classes.column
            )}>
                <Dialog
                     open={open} 
                     onClose={handleClose} 
                >
                    <DialogContent>
                        <WorkoutDayForm date={date} handleClose={handleClose}/>
                    </DialogContent>
                </Dialog>
            </div>
    </div>
}