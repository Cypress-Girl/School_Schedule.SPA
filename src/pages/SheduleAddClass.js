import React from 'react'

const scheduleArt = [
    {day: "СБ", time: "15:00 - 18:00"},
    {day: "ВС", time: "10:00 - 13:00"}
]

const scheduleEnglish = [
    {day: "СР", time: "20:00 - 21:00"},
    {day: "ПТ", time: "20:00 - 21:00"}
]

function TableData(props) {
    return (
        <tr key={props.index}>
            <td>{props.day}</td>
            <td>{props.time}</td>
        </tr>
    )
}

function LessonTable(props) {
    let scheduleRows;
    let title;

    if (Number(props.id) == 0) {
        title = "РАСПИСАНИЕ ПО АНГЛИЙКОМУ ЯЗЫКУ";
        scheduleRows = (
            <React.Fragment>
                {scheduleEnglish.map((item, index) => (
                    <TableData day={item.day} time={item.time} index={index} key={index}/>
                ))}
            </React.Fragment>
        )
    } else {
        title = "РАСПИСАНИЕ В ХУДОЖЕСТВЕННОЙ ШКОЛЕ";
        scheduleRows = (
            <React.Fragment>
                {scheduleArt.map((item, index) => (
                    <TableData day={item.day} time={item.time} index={index} key={index}/>
                ))}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <table>
                <thead>
                <tr>
                    <th>День недели</th>
                    <th>Время занятий</th>
                </tr>
                </thead>
                <tbody>
                {scheduleRows}
                </tbody>
            </table>
        </React.Fragment>
    )
}

function ScheduleAddClass(props) {
    return (
        <div id="shedule-main-div">
            <div id="rounded-div">
                <LessonTable id={props.match.params.id}/>
            </div>
            <button onClick={props.history.goBack}>Назад</button>
        </div>
    )
}

export default ScheduleAddClass;