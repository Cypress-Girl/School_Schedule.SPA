import React from 'react'
import "./School.css";
import {Link} from "react-router-dom";
import {weekday} from "../data/data";

function School() {
    let tag;
    return <div id="rounded-div">
        {weekday.map((day, index) => {
            tag = null;
            if (index < 5) {
                tag = <Link to={`/school/${index}`} key={index} className="secondary-link">{day.name}</Link>;
            }
            return tag;
        })}
    </div>
}


export default School;