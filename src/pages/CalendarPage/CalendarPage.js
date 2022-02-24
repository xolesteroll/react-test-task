import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import moment from "moment";
import formatDate from "../../helpers/utils/isoDateFormatter";

import s from "./CalendarPage.module.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])


const CalendarPage = () => {
    const [events, setEvents] = useState([])

    useEffect( () => {
        const fetchEvents = async () => {
            const response = await fetch('https://api.lyvecom.com/1/personalmeeting/621391e1252a8105105e4fe2')
            const data = await response.json()
            const sheduledTime = data.result.schedule_time

            const {year: startYear, month: startMonth, day: startDay} = formatDate(+sheduledTime)
            const {year: endYear, month: endMonth, day: endDay} = formatDate(+Date.now())

            setEvents([{
                id: Date.now(),
                title: 'Fetched event',
                start: new Date(startYear, startMonth, startDay),
                end: new Date(endYear, endMonth, endDay)
            }])
        }

        fetchEvents()
    }, [])

    return (
        <div className={s.calendarWrapper}>
            <Calendar
                localizer={localizer}
                views={allViews}
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
