import {useState} from 'react'
import DatePickerC from '../src/components/common/DatePickerC'
import moment from 'moment'

export default function Temp() {
    const [selectedDay, setSelectedDay] = useState(moment())
    const onSelect = (d: moment.Moment) => alert("Clicked: " + d.format("DD-MM-YYYY"))

    console.log("temp.tsx", selectedDay)

    return <DatePickerC selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
}