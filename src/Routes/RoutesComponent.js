import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SellerAddItem from '../Pages/Seller-AddItem/Add-item';
import Store from '../Pages/Store/Store'
import SellerProfile from '../Pages/SellerProfile/SellerProfile'
import Checkout from '../Pages/Checkout/Checkout';
import BuyerSignUp from '../Pages/BuyerSignUp/BuyerSignUp';
import SellerSignup from '../Pages/SellerSignUp/SellerSignup';
import ProductProfile from '../Pages/ProductProfile/ProductProfile';
import CustomerProfile from '../Pages/CustomerProfile/CustomerProfile';

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
                    <Route path="/buyersignup" exact component={BuyerSignUp} />
                    <Route path="/sellersignup" exact component={SellerSignup} />





                    {/* Dilusha */}
                    <Route path="/additem" exact component={SellerAddItem} />






                    {/* Shevon */}
                    <Route path="/store" exact component={Store} />
                    <Route path="/sellerprofile" exact component={SellerProfile} />
                    <Route path="/productprofile" exact component={ProductProfile} />
                    <Route path="/customerprofile" exact component={CustomerProfile} />





                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent