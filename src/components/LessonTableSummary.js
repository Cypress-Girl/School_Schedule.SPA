import {weekday} from "../data/data";
import React from "react";
import ArtRow from "./ArtRow";
import EnglishRow from "./EnglishRow";
import SchoolRow from "./SchoolRow";

function LessonTableSummary() {
    return (
        <React.Fragment>
            <h3>РАСПИСАНИЕ НА НЕДЕЛЮ</h3>
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
        </React.Fragment>
    )
}

export default LessonTableSummary;