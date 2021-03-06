import React, { Component } from 'react';
import axios from 'axios';

class PurchaseHistoryModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buyerid: "",
            itemid: ""
        }
    }

    componentDidMount() {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/history/auth", "", config)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => { })

    }


    render() {
        return (
            <div>
                <section class="products">
                    <div class="container">
                        <h1>Order History</h1>
                        <br />
                        <div class="row">
                            <div class="col-md-10" style={{ width: 'auto' }}>
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="checkout-cart">
                                            <div class="content">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">{this.state.buyerid}</h2>
                                                        <label>Laptops</label>
                                                        <p class="price">$199.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a> <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/chrome-book-14.jpg" alt="HP Chromebook 11" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">HP Chromebook 14</h2>
                                                        <label>Laptops</label>
                                                        <p class="price">$209.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a > <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/ipad-air.jpg" alt="iPad Air" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">iPad Air</h2>
                                                        <label>Tablets</label>
                                                        <p class="price">$449.99</p>

                                                    </div>
                                                    <div class="controls">
                                                        <a> <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/mi-pad-2.jpg" alt="HP Chromebook 11" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">Mi Pad 2</h2>
                                                        <label>Tablets</label>
                                                        <p class="price">$199.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a > <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/lenovo-yoga.jpg" alt="Lenovo Yoga" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">Lenovo Yoga</h2>
                                                        <label>Hybrid</label>
                                                        <p class="price">$199.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a > <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/surface-pro.jpg" alt="HP Chromebook 11" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">Surface Pro</h2>
                                                        <label>Hybrid</label>
                                                        <p class="price">$199.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a > <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                                <div class="media">
                                                    <div class="media-left">
                                                        <a href="#">
                                                            <img class="media-object" src="../assets/img/products/asus-transformer.jpg" alt="HP Chromebook 11" />
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2 class="h4 media-heading">ASUS Transformer</h2>
                                                        <label>Hybrid</label>
                                                        <p class="price">$199.99</p>
                                                    </div>
                                                    <div class="controls">
                                                        <a > <i class="iconify" data-icon="clarity:success-standard-solid" data-inline="false"></i>DONE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PurchaseHistoryModule
