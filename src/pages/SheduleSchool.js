import React from "react";
import "./SheduleSchool.css";

const SUB_ALGEBRA = "Алгебра";
const SUB_GEOMETRY = "Геометрия";
const SUB_RUSSIAN = "Русский язык";
const SUB_LITERATURE = "Литература";
const SUB_GEOGRAPHY = "География";
const SUB_HISTORY = "История";
const SUB_PE = "Физ-ра";
const SUB_SOCIAL = "Обществознание";
const SUB_BIOLOGY = "Биология";
const SUB_ENGLISH = "Английский язык";
const SUB_COMPUTER = "Информатика";
const SUB_PHYSICS = "Физика";
const SUB_TECHNOLOGY = "Технология";
const SUB_NATIVE_LANG = "Родной язык";
const SUB_MUSIC = "Музыка";
const SUB_ART = "ИЗО";
const SUB_OPEN_PE = "Внеурочка физ-ра";
const SUB_OPEN_MATHS = "Внеурочка математика";

const lessonTime = [
    "13:10 - 13:50",
    "14:00 - 14:40",
    "14:55 - 15:35",
    "15:40 - 16:20",
    "16:25 - 17:05",
    "17:10 - 17:50",
    "17:55 - 18:35"
]

const shedule = [
    {"first": 1, "subjects": [SUB_ALGEBRA, SUB_GEOGRAPHY, SUB_HISTORY, SUB_PE, SUB_RUSSIAN, SUB_LITERATURE]},
    {"first": 0, "subjects": [SUB_SOCIAL, SUB_BIOLOGY, SUB_GEOMETRY, SUB_ENGLISH, SUB_ALGEBRA, SUB_COMPUTER, SUB_OPEN_PE]},
    {"first": 0, "subjects": [SUB_RUSSIAN, SUB_PHYSICS, SUB_LITERATURE, SUB_ALGEBRA, SUB_GEOMETRY, SUB_GEOGRAPHY]},
    {"first": 0, "subjects": [SUB_OPEN_MATHS, SUB_PE, SUB_ENGLISH, SUB_TECHNOLOGY, SUB_TECHNOLOGY, SUB_NATIVE_LANG, SUB_NATIVE_LANG]},
    {"first": 0, "subjects": [SUB_MUSIC, SUB_ENGLISH, SUB_ALGEBRA, SUB_RUSSIAN, SUB_HISTORY, SUB_ART, SUB_PHYSICS]},
]

const nameOfDays = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДУ", "ЧЕТВЕРГ", "ПЯТНИЦУ"];

function LessonTable(props) {
    return (
        <table>
            <tr>
                <th>№</th>
                <th>Время</th>
                <th>Предмет</th>
            </tr>
            {shedule[props.weekday].subjects.map((subject, index) => (
                <tr>
                    <td>{index + shedule[props.weekday].first}</td>
                    <td>{lessonTime[index + shedule[props.weekday].first]}</td>
                    <td>{subject}</td>
                </tr>
            ))}
        </table>
    )
}

function SheduleSchool(props) {
    let weekday = props.match.params.weekday;
    let countLessons = shedule[weekday].subjects.length;

    return (
        <div id="rounded-div1">
            <h3>РАСПИСАНИЕ НА {nameOfDays[weekday]}</h3>
            <h4>{countLessons} уроков</h4>
            <LessonTable weekday={weekday} />
        </div>
    )
}

export default SheduleSchool;