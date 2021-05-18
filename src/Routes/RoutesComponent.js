import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SellerAddItem from '../Pages/Seller-AddItem/Add-item';
import Store from '../Pages/Store/Store'
import SellerProfile from '../Pages/SellerProfile/SellerProfile'
import Checkout from '../Pages/Checkout/Checkout';
import ProductProfile from '../Pages/ProductProfile/ProductProfile'

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    {/* Maduka */}
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />





                    {/* Dilusha */}
                    <Route path="/additem" exact component={SellerAddItem} />





                    {/* Shevon */}
                    <Route path="/store" exact component={Store} />
                    <Route path="/sellerProfile" exact component={SellerProfile} />
                    <Route path="/productProfile" exact component={ProductProfile}/>





                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent