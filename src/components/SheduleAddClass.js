import React from 'react'
// import {scheduleArt, scheduleEnglish, weekday} from "../data/data";
import ScheduleDiv from "./ScheduleDiv";
import {TYPE_SCHEDULE_ADD_CLASS} from "../data/data";

// function TableData(props) {
//     return (
//         <tr key={props.index}>
//             <td style={{fontWeight: "bold"}}>{props.day}</td>
//             <td>{props.time}</td>
//         </tr>
//     )
// }
//
// function LessonTable(props) {
//     let scheduleRows;
//     let title;
//
//     if (Number(props.id) === 0) {
//         title = "РАСПИСАНИЕ ПО АНГЛИЙКОМУ ЯЗЫКУ";
//         scheduleRows = (
//             <React.Fragment>
//                 {scheduleEnglish.map((item, index) => (
//                     <TableData day={weekday[item.day].title} time={item.time} index={index} key={index}/>
//                 ))}
//             </React.Fragment>
//         )
//     } else {
//         title = "РАСПИСАНИЕ В ХУДОЖЕСТВЕННОЙ ШКОЛЕ";
//         scheduleRows = (
//             <React.Fragment>
//                 {scheduleArt.map((item, index) => (
//                     <TableData day={weekday[item.day].title} time={item.time} index={index} key={index}/>
//                 ))}
//             </React.Fragment>
//         )
//     }
//     return (
//         <React.Fragment>
//             <h3>{title}</h3>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>День недели</th>
//                     <th>Время занятий</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {scheduleRows}
//                 </tbody>
//             </table>
//         </React.Fragment>
//     )
// }

function ScheduleAddClass(props) {
    // return (
    //     <div id="schedule-main-div">
    //         <div id="rounded-div">
    //             <LessonTable id={props.match.params.id}/>
    //         </div>
    //         <button onClick={props.history.goBack}>Назад</button>
    //     </div>
    // )
    return (
        <ScheduleDiv typeSchedule={TYPE_SCHEDULE_ADD_CLASS} {...props} />
    )
}

export default ScheduleAddClass;