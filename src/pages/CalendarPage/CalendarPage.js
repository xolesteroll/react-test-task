import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import moment from "moment";

import s from "./CalendarPage.module.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])


const CalendarPage = () => {
    const [events, setEvents] = useState([])

    console.log(events)

    useEffect(async () => {
        const response = await fetch('https://api.lyvecom.com/1/personalmeeting/621391e1252a8105105e4fe2')
        const data = await response.json()
        console.log(data.result)
        const sheduledTime = data.result.schedule_time
        console.log(sheduledTime)
        setEvents(prevState => [...prevState, {
            id: Date.now(),
            title: 'Fetched event',
            allDay: true,
            start: Date.now(),
            end: new Date(+sheduledTime)
        }])
    }, [])

    return (
        <div className={s.calendarWrapper}>
            <Calendar
                localizer={localizer}
                views={allViews}
                step={60}
                events={events}
                showMultiDayTimes
                startAccessor="start"
                endAccessor="end"
                style={{
                    height: '600px'
                }}
            />
        </div>

    );
};

export default CalendarPage;
