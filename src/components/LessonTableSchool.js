import {lessonTime, schedule} from "../data/data";
import React from "react";

const nameOfDays = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДУ", "ЧЕТВЕРГ", "ПЯТНИЦУ"];

function LessonTableSchool(props) {
    let countLessons = schedule[props.weekday].subjects.length;

    return (
        <React.Fragment>
            <h3>РАСПИСАНИЕ НА {nameOfDays[props.weekday]}</h3>
            <h4>{countLessons} уроков</h4>

            <table>
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
        </React.Fragment>
    )
}

export default LessonTableSchool;