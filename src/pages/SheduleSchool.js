import React from "react";
import "./SheduleSchool.css";
import {schedule, lessonTime} from "./data";

const nameOfDays = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДУ", "ЧЕТВЕРГ", "ПЯТНИЦУ"];

function LessonTable(props) {
    return (
        <table >
            <thead>
                <tr>
                    <th>№</th>
                    <th>Время</th>
                    <th>Предмет</th>
                </tr>
            </thead>
            <tbody>
                {schedule[props.weekday].subjects.map((subject, index) => (
                    <tr key={index}>
                        <td style={{fontWeight: "bold"}}>{index + schedule[props.weekday].first}</td>
                        <td>{lessonTime[index + schedule[props.weekday].first]}</td>
                        <td>{subject}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

function ScheduleSchool(props) {
    debugger;
    let weekday = props.match.params.weekday;
    let countLessons = schedule[weekday].subjects.length;

    return (
        <div id="schedule-main-div">
            <div id="rounded-div1">
                <h3>РАСПИСАНИЕ НА {nameOfDays[weekday]}</h3>
                <h4>{countLessons} уроков</h4>
                {/*<h4 style={{cursor: "pointer"}} onClick={() => props.history.push('/school/:0')}>Push to add class </h4>*/}
                <LessonTable weekday={weekday} />
            </div>
            <button onClick={props.history.goBack} >Назад</button>
        </div>
    )
}

export default ScheduleSchool;