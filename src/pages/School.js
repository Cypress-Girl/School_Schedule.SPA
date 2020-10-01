import React from 'react'
import {Link} from "react-router-dom";
import "./School.css";

const weekday = [
    {name: "monday", title: "ПН"},
    {name: "tuesday", title: "ВТ"},
    {name: "wednesday", title: "СР"},
    {name: "thursday", title: "ЧТ"},
    {name: "friday", title: "ПТ"}
]

function School() {
    return (
        <div id="rounded-div">
            {weekday.map((day, index) => (
                <Link to={`/school/${index}`} key={index} className="secondary-link">
                    {day.title}
                </Link>
            ))}
        </div>
    )
}


export default School;