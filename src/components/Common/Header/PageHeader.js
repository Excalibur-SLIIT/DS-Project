import React, { Component } from 'react'

class PageHeader extends Component {
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
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="/signin"> <i class="ion-android-person"></i> Login </a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign Up<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="/buyersignup">Sign Up As A Buyer</a></li>
                                        <li><a href="/sellersignup">Sign Up As A Seller</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default PageHeader
