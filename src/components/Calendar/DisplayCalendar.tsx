import React, { useState } from 'react';
import DatePickerC from '../common/DatePickerC';
import moment from 'moment';

export default function DisplayCalendar({formOpen}: any) {
   

    const [selectedDay, setSelectedDay] = useState(moment())
    // const onSelect = (d: moment.Moment) => alert("Clicked: " + d.format("DD-MM-YYYY"))
    const onSelect = formOpen
    
    return <DatePickerC selectedDay={selectedDay} setSelectedDay={setSelectedDay} onSelect={onSelect} />
}