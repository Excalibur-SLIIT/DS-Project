import React, { Component } from 'react'
import axios from "axios";

class PageHeader extends Component {

    constructor(props) {

        super(props);
        this.state = {
            user: null
        }

    }

    componentDidMount() {

        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/buyer/auth", "", config).then((res) => {
            this.setState({ user: res.data.username })
        }).catch((err) => {
            axios.post("http://localhost:5000/seller/auth", "", config).then((res) => {
                this.setState({ user: res.data.username })
            })
        })

    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="/"> <i class="ion-cube"></i> Excalibur</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                                <li><a href="store">Store</a></li>
                                <li><a href="/sellerprofile">Seller A/C</a></li>
                                <li><a href="/additem">Add Item</a></li>
                                <li><a href="/buyerprofile">Buyer A/C</a></li>
                                <li><a href="/buyereditprofile">Buyer A/C Edit</a></li>
                                <li><a href="/productprofile">Product Profile</a></li>
                            </ul>

                            {this.state.user ? <>
                                < ul class="nav navbar-nav navbar-right" >
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.state.user}<span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/buyerprofile">Profile</a></li>
                                            <li><a onClick={() => { localStorage.removeItem("x-auth-token"); window.location = "/" }}>Sign Out</a></li>
                                        </ul>
                                    </li>
                                </ul ></> :

                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign In<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/buyersignin">Sign In As A Buyer</a></li>
                                            <li><a href="/sellersignin">Sign In As A Seller</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign Up<span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/buyersignup">Sign Up As A Buyer</a></li>
                                            <li><a href="/sellersignup">Sign Up As A Seller</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            }

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default PageHeader