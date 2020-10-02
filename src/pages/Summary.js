import React from 'react'
import {lessonTime, schedule, scheduleArt, scheduleEnglish, weekday} from "../data/data";

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

function EnglishRow(props) {
    let day = props.day;
    let text = "-";

    for (let lesson=0; lesson < scheduleEnglish.length; lesson++){
        if (scheduleEnglish[lesson].day === day){
            text = scheduleEnglish[lesson].time;
            break;
        }
    }
    return (
        <td>
            {text}
        </td>
    )
}

function ArtRow(props) {
    let day = props.day;
    let text = "-";

    for (let lesson=0; lesson < scheduleArt.length; lesson++){
        if (scheduleArt[lesson].day === day){
            text = scheduleArt[lesson].time;
            break;
        }
    }
    return (
        <td>
            {text}
        </td>
    )
}

function LessonTable() {
    return (
        <table>
            <thead>
            <tr>
                <th>День</th>
                <th>Школа</th>
                <th>Английский</th>
                <th>Художка</th>
            </tr>
            </thead>
            <tbody>
            {weekday.map((day, index) => (
                <tr key={index}>
                    <td style={{fontWeight: "bold"}}>{day.title}</td>
                    <SchoolRow day={index}/>
                    <EnglishRow day={index}/>
                    <ArtRow day={index}/>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

function SummaryLesson(props) {
    return (
        <div id="schedule-main-div">
            <div id="rounded-div1">
                <h3>РАСПИСАНИЕ НА НЕДЕЛЮ</h3>
                <LessonTable />
            </div>
            <button onClick={props.history.goBack}>Назад</button>
        </div>
    )
}

export default SummaryLesson;