import React, { useState, useRef } from "react";

import * as Moment from 'moment'
import {extendMoment} from 'moment-range'
const moment = extendMoment(Moment);

import classnames from "classnames";
import useStyles from './Calendar.styles';

import CalendarCell from './CalendarCell';

const Calendar = (props: {
    className?: string;
    handleClickOpen?: Function;
  }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    // Form
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    // DatePicker

    const { className, ...other } = props;
    const [expandedMonths, setExpandedMonths] = useState(false);
    const [expandedYears, setExpandedYears] = useState(false);
    const [selectedDay, setSelectedDay] = useState(moment())

    const yearRef = useRef(null);

    const today = moment().startOf("day");
    const startOfMonth = selectedDay.clone().startOf("month");
    const endOfMonth = selectedDay.clone().endOf("month");

    const dateRange = Array.from(
        moment.range(startOfMonth, endOfMonth).by("day")
    );

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let empty = [];
    let days = [];
    let years = [];

    if (!empty.length)
        for (let i = 1; i <= selectedDay.clone().startOf("month").day(); i++)
        empty.push(i);

    if (!days.length)
        for (let i = 1; i <= startOfMonth.daysInMonth(); i++) days.push(i);
    if (!years.length) for (let i = 1900; i <= 2100; i++) years.push(i);

    const handleDayClick = (d) => {
        setSelectedDay(moment(d, "DD"));
        handleClickOpen && handleClickOpen();
        
    };

    const handleMonthClick = (m) => {
        setSelectedDay(moment(m + "/" + selectedDay.year(), "MMMM/YYYY"));
        setExpandedMonths(false);
    };
    const handleYearClick = (y) => {
        setSelectedDay(moment(selectedDay.month() + 1 + "/" + y, "MM/YYYY"));
        setExpandedYears(false);
    };

    return (
        <div className={classes.root}>
            <div className={classnames(
                classes.container,
                classes.column,
            )}>
                <div className={classnames(classes.rootDatePicker, className)}>
                    <nav>
                        <div
                        onClick={() => {
                            if (expandedYears) setExpandedYears(!expandedYears);
                            setExpandedMonths(!expandedMonths);
                        }}
                        >
                            {selectedDay.format("MMM")}
                            <span
                                className={classnames("material-icons", {
                                [classes.rotate180cw]: expandedMonths,
                                [classes.rotate0ccw]: !expandedMonths,
                                })}
                            >
                                arrow_drop_down
                            </span>
                        </div>
                        <div
                        onClick={() => {
                            if (expandedMonths) setExpandedMonths(!expandedMonths);
                            setExpandedYears(!expandedYears);
                            // yearRef.current.scrollIntoView();
                        }}
                        >
                            <span
                                className={classnames("material-icons", {
                                [classes.rotate180ccw]: expandedYears,
                                [classes.rotate0cw]: !expandedYears,
                                })}
                            >
                                arrow_drop_down
                            </span>
                            {selectedDay.format("YYYY")}
                        </div>
                    </nav>
                <div
                    className={classnames(classes.expand__months, {
                    [classes.expanded__months]: expandedMonths,
                    [classes.collapsed__months]: !expandedMonths,
                    })}
                >
                    <div>
                        {months.map((m) => (
                        <span
                        className={classnames({
                            [classes.selected__date]: m === selectedDay.format("MMMM"),
                        })}
                        key={"month-" + m}
                        onClick={() => handleMonthClick(m)}
                        >
                        {m}
                        </span>
                        ))}
                    </div>
                </div>
                <div
                    className={classnames(classes.expand__years, {
                    [classes.expanded__years]: expandedYears,
                    [classes.collapsed__years]: !expandedYears,
                    })}
                >
                    {years.map((y) => {
                    if (y.toString() === selectedDay.format("YYYY")) {
                        return (
                        <span
                            ref={yearRef}
                            className={classnames({
                            [classes.selected__date]:
                                y.toString() === selectedDay.format("YYYY"),
                            })}
                            key={"year-" + y}
                            onClick={() => handleYearClick(y)}
                        >
                            {y}
                        </span>
                        );
                    } else {
                        return (
                        <span
                            className={classnames({
                            [classes.selected__date]:
                                y.toString() === selectedDay.format("YYYY"),
                            })}
                            key={"year-" + y}
                            onClick={() => handleYearClick(y)}
                        >
                            {y}
                        </span>
                        );
                    }
                    })}
                </div>

                <div className={classes.cRoot}>
                    <nav>
                    {weekDays.map((d: string) => (
                        <div key={"day-" + d}>{d.substring(0, 1)}</div>
                    ))}
                    </nav>
                    {empty.map((el) => (
                    <div key={"empty-" + el} />
                    ))}
                    {dateRange.map((date: moment.Moment) => (
                    <div key={"day-" + date.date()}>
                        <CalendarCell 
                            date={date} 
                            selectedDay={selectedDay} 
                            handleDayClick={handleDayClick}
                        />
                    </div>
                    ))}
                </div>
                </div>
            </div>
          

            

        </div>
    )
}

export default Calendar;