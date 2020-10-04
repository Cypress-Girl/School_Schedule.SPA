import React from 'react'
import ScheduleDiv from "../components/ScheduleDiv";
import {TYPE_SCHEDULE_SUMMARY} from "../data/data";

function SummaryLesson(props) {
    return (
        <ScheduleDiv typeSchedule={TYPE_SCHEDULE_SUMMARY} {...props} />
    )
}

export default SummaryLesson;