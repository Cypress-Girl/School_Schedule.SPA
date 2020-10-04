import {scheduleEnglish} from "../data/data";
import React from "react";

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

export default EnglishRow;