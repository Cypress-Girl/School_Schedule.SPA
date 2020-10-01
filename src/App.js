import React from 'react';
import './App.css';
import School from "./pages/School";
import SummaryLesson from "./pages/Summary";
import AddClass from "./pages/AddClass";
import SheduleSchool from "./pages/SheduleSchool";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <nav className="nav">
                    <Link className="link" to="/school">Школа</Link>
                    <Link className="link" to="/add">Допы</Link>
                    <Link className="link" to="/summary">Сводная</Link>
                </nav>
                <Switch>
                    <Route exact={true} path="/school">
                        <School/>
                    </Route>

                    <Route path="/school/:weekday" children={(props) => <SheduleSchool {...props}/>}/>

                    <Route path="/add">
                        <AddClass/>
                    </Route>

                    <Route path="/summary">
                        <SummaryLesson/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
