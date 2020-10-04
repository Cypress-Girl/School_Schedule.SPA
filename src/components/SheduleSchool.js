import React from "react";
import ScheduleDiv from "./ScheduleDiv";
import {TYPE_SCHEDULE_SCHOOl} from "../data/data";

function ScheduleSchool(props) {
    return (
        <ScheduleDiv typeSchedule={TYPE_SCHEDULE_SCHOOl} {...props} />
    )
}

export default ScheduleSchool;