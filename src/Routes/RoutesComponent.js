import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" exact component={SignIn}/>
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent