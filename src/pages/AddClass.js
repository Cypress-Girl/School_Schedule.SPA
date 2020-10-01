import React from 'react'
import {Link} from "react-router-dom";

const addClassName = ["АНГЛИЙСКИЙ ЯЗЫК", "ХУДОЖЕСТВЕННАЯ ШКОЛА"];

function AddClass() {
    return (
        <div id="rounded-div">
            {addClassName.map((subject, index) => (
                <Link to={`/add/${index}`} key={index} className="secondary-link">{subject}</Link>
            ))}
        </div>
    )
}

export default AddClass;