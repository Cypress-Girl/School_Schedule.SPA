import {weekday} from "../data/data";
import React from "react";
import ArtRow from "./ArtRow";
import EnglishRow from "./EnglishRow";
import SchoolRow from "./SchoolRow";

const strMass = ['One','Two','Three','Four','Five','Six','Seven','Eight'];

class LessonTableSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colored: strMass.map(() => true)
        }

        this.timerLongMS = 3500;
        this.timerChangeColorMS = 50;
        this.count = 0;
    }

    tickChangeColor() {
        let newColored = [...this.state.colored];
        newColored[this.count] = !newColored[this.count];

        this.setState({
            colored: newColored,
        })

        this.count++;

        if (this.count > strMass.length){   //закончили один проход столбца
            this.count = 0;                 //счётчик на первую строку в столбце

            if (this.state.colored[0] === false)        //столбец уже перекрашен в стандартный цвет
                clearTimeout(this.timerChangeColor);    //удаляем таймер
            else        //продолжаем перекрашивать строчки, начав с первой
                this.timerChangeColor = setTimeout(() => this.tickChangeColor(), this.timerChangeColorMS);
        } else {
            this.timerChangeColor = setTimeout(() => this.tickChangeColor(), this.timerChangeColorMS);
        }
    }

    tickLong() {
        this.timerChangeColor = setTimeout(() => this.tickChangeColor(), this.timerChangeColorMS);
        this.timerLong = setTimeout(() => this.tickLong(), this.timerLongMS);
    }

    componentDidMount() {
        this.tickLong();
    }

    componentWillUnmount() {
        clearTimeout(this.timerLong);
        clearTimeout(this.timerChangeColor);
    }

    render() {
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
                            <SchoolRow day={index} style={this.state.colored[index] ? {color: "#ff8282"} : {color: ""}} {...this.props}/>
                            <EnglishRow day={index}/>
                            <ArtRow day={index}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default LessonTableSummary;