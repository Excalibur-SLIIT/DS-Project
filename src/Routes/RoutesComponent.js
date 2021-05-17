import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SellerAddItem from '../Pages/Seller-AddItem/Add-item';
import Store from '../Pages/Store/Store'

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/seller/additem" exact component={SellerAddItem} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/store" exact component ={Store} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent