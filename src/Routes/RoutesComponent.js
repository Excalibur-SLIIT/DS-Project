import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartProductsModule from '../Modules/CartModules/CartProductsModule/CartProductsModule';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/cart" exact component={Cart}/>
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent