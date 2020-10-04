import {scheduleArt} from "../data/data";
import React from "react";

function ArtRow(props) {
    let day = props.day;
    let text = "-";

    for (let lesson=0; lesson < scheduleArt.length; lesson++){
        if (scheduleArt[lesson].day === day){
            text = scheduleArt[lesson].time;
            break;
        }
    }
    return (
        <td>
            {text}
        </td>
    )
}

export default ArtRow;