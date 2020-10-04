import {lessonTime, schedule} from "../data/data";
import React from "react";

function SchoolRow(props) {
    let day = props.day;
    let text;
    if (day < 5) {
        let countLesson = schedule[day].subjects.length;
        let firstLesson = schedule[day].first;
        let timeFirstLesson = lessonTime[firstLesson];
        let timeLastLesson = lessonTime[firstLesson + countLesson - 1];

        let divider = "-";
        let dividerPos = timeFirstLesson.indexOf(divider, 0);
        let durationLesson = timeFirstLesson.substring(0, dividerPos+1) + timeLastLesson.substring( dividerPos+1, timeLastLesson.length);

        text = durationLesson;
    } else {
        text = "-";
    }

    return (
        <td style={{cursor: "pointer"}} onClick={() => alert("click")}>
            {text}
        </td>
    )
}

export default SchoolRow;