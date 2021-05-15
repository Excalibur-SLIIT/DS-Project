import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <hr class="offset-md" />
                <hr />
                <footer>
                    <div class="container">
                        <div class="row menu">
                            <div class="col-sm-3 col-md-2">
                                <h1 class="h4">Information <i class="ion-plus-round hidden-sm hidden-md hidden-lg"></i> </h1>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">About</a>
                                    <a href="#" class="list-group-item">Terms</a>
                                    <a href="#" class="list-group-item">How to order</a>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-2">
                                <h1 class="h4">Products <i class="ion-plus-round hidden-sm hidden-md hidden-lg"></i> </h1>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">Laptops</a>
                                    <a href="#" class="list-group-item">Tablets</a>
                                    <a href="#" class="list-group-item">Servers</a>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-2">
                                <h1 class="h4">Support <i class="ion-plus-round hidden-sm hidden-md hidden-lg"></i> </h1>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">Returns</a>
                                    <a href="#" class="list-group-item">FAQ</a>
                                    <a href="#" class="list-group-item">Contacts</a>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-2">
                                <h1 class="h4">Location</h1>
                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language
                                <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a href="#English"> <img src="../assets/img/flags/gb.png" alt="" /> English</a>
                                        </li>
                                        <li>
                                            <a href="#Spanish"> <img src="../assets/img/flags/es.png" alt="" /> Spanish</a>
                                        </li>
                                        <li>
                                            <a href="#Deutch"> <img src="../assets/img/flags/de.png" alt="" /> Deutch</a>
                                        </li>
                                        <li>
                                            <a href="#French"> <img src="../assets/img/flags/fr.png" alt="" /> French</a>
                                        </li>
                                    </ul>
                                </div>
                                <hr class="offset-xs" />
                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Currency
                                <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><a href="#Euro"><i class="ion-social-euro"></i> Euro</a></li>
                                        <li><a href="#Dollar"><i class="ion-social-usd"></i> Dollar</a></li>
                                        <li><a href="#Yen"><i class="ion-social-yen"></i> Yen</a></li>
                                        <li><a href="#Bitcoin"><i class="ion-social-bitcoin"></i> Bitcoin</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-3 col-md-offset-1 align-right hidden-sm hidden-xs">
                                <h1 class="h4">Excalibur, Inc.</h1>
                                <address>
                                    23/D, Market Street,<br />
                                Colombo, Sri Lanka<br />
                                Phone: 031 227 8920
                                </address>
                                <address>
                                    <strong>Support</strong>
                                    <br />
                                    <a href="mailto:#">excalibur@gmail.com</a>
                                </address>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer