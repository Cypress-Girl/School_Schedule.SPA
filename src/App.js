import React from 'react';
import './App.css';
import School from "./pages/School";
import SummaryLesson from "./pages/Summary";
import AddClass from "./pages/AddClass";
import ScheduleSchool from "./components/SheduleSchool";
import ScheduleAddClass from "./components/SheduleAddClass";

import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <nav className="nav">
                    <NavLink className="link" to="/school">Школа</NavLink>
                    <NavLink className="link" to="/add">Допы</NavLink>
                    <NavLink className="link" to="/summary">Сводная</NavLink>
                </nav>
                <Switch>
                    <Route exact={true} path="/school">
                        <School/>
                    </Route>

                    <Route path="/school/:weekday" children={(props) => <ScheduleSchool {...props}/>}/>

                    <Route exact={true} path="/add">
                        <AddClass/>
                    </Route>

                    <Route path="/add/:id" children={(props) => <ScheduleAddClass {...props}/>}/>

                    <Route path="/summary" children={(props) => <SummaryLesson {...props}/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
