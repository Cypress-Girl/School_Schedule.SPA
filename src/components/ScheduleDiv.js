import React from 'react';
import LessonTableAddClass from "./LessonTableAddClass";
import LessonTableSchool from "./LessonTableSchool";
import {TYPE_SCHEDULE_ADD_CLASS} from "../data/data";

function ScheduleDiv(props) {
    let componentTable;
    if(props.typeSchedule === TYPE_SCHEDULE_ADD_CLASS)
        componentTable = <LessonTableAddClass id={props.match.params.id}/>;
    else
        componentTable = <LessonTableSchool weekday={props.match.params.weekday} />;

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