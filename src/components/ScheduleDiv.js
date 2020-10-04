import React from 'react';
import LessonTableAddClass from "./LessonTableAddClass";
import LessonTableSchool from "./LessonTableSchool";
import LessonTableSummary from "./LessonTableSummary";

import {TYPE_SCHEDULE_ADD_CLASS, TYPE_SCHEDULE_SCHOOl, TYPE_SCHEDULE_SUMMARY} from "../data/data";

function ScheduleDiv(props) {
    let componentTable;

    if (props.typeSchedule === TYPE_SCHEDULE_ADD_CLASS)
        componentTable = <LessonTableAddClass id={props.match.params.id}/>;
    else if (props.typeSchedule === TYPE_SCHEDULE_SCHOOl)
        componentTable = <LessonTableSchool weekday={props.match.params.weekday}/>;
    else if (props.typeSchedule === TYPE_SCHEDULE_SUMMARY)
        componentTable = <LessonTableSummary push={props.history.push}/>;

    return (
        <div id="schedule-main-div">
            <div id="rounded-div">
                {componentTable}
            </div>
            <button onClick={props.history.goBack}>Назад</button>
        </div>
    )
}

export default ScheduleDiv;