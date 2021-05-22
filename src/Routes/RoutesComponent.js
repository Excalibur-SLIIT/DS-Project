import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SellerAddItem from '../Pages/Seller-AddItem/Add-item';
import Store from '../Pages/Store/Store';
import SellerProfile from '../Pages/SellerProfile/SellerProfile'
import Checkout from '../Pages/Checkout/Checkout';
import BuyerSignUp from '../Pages/BuyerSignUp/BuyerSignUp';
import SellerSignup from '../Pages/SellerSignUp/SellerSignup';
import ProductProfile from '../Pages/ProductProfile/ProductProfile';
import CustomerProfile from '../Pages/CustomerProfile/CustomerProfile';
import SellerEditItem from '../Pages/Seller-EditItem/Edit-item';
import BuyerProfile from '../Pages/BuyerProfile/BuyerProfile';
import BuyerEditProfile from '../Pages/BuyerEditProfile/BuyerEditProfile';
import SellerSignIn from '../Pages/SignIn/SellerSignIn/SignIn';
import BuyerSignIn from '../Pages/SignIn/BuyerSignIn/SignIn';
import SellerEditProfile from '../Pages/SellerEditProfile/SellerEditProfile';

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    {/* Maduka */}
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/buyersignup" exact component={BuyerSignUp} />
                    <Route path="/sellersignup" exact component={SellerSignup} />
                    <Route path="/buyerprofile" exact component={BuyerProfile} />
                    <Route path="/buyersignin" exact component={BuyerSignIn} />
                    <Route path="/buyereditprofile" exact component={BuyerEditProfile} />





                    {/* Dilusha */}
                    <Route path="/additem" exact component={SellerAddItem} />
                    <Route path="/edititem/:id" component={SellerEditItem} />
                    <Route path="/sellerprofile" component={SellerProfile} />
                    <Route path="/sellersignup" exact component={SellerSignup} />
                    <Route path="/sellersignin" exact component={SellerSignIn} />
                    <Route path="/selleredit" exact component={SellerEditProfile} />





                    {/* Shevon */}
                    <Route path="/store" exact component={Store} />
                    <Route path="/productprofile" exact component={ProductProfile} />
                    <Route path="/customerprofile" exact component={CustomerProfile} />





                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent