import React, { Component } from 'react';


export class Items extends Component {
    onClick = (e) => {
        e.preventDefault()
        console.log('onclick..')
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
                            <a class="navbar-brand" href="../"> <i class="ion-cube"></i> Unistore</a>
                        </div>

                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li><a href="../">Home</a></li>
                                <li><a href="../catalog/">Catalog</a></li>
                                <li><a href="../blog/">Blog</a></li>
                                <li><a href="../gallery/">Gallery</a></li>
                                <li class="dropdown">
                                    <a href="../catalog/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="../catalog/product.html">Product</a></li>
                                        <li><a href="../cart/">Cart</a></li>
                                        <li><a href="../checkout/">Checkout</a></li>
                                        <li><a href="../faq/">FAQ</a></li>
                                        <li><a href="../contacts/">Contacts</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li class="dropdown-header">Variations</li>
                                        <li><a href="../home">Home</a></li>
                                        <li><a href="../blog/item-photo.html">Article Photo</a></li>
                                        <li><a href="../blog/item-video.html">Article Video</a></li>
                                        <li><a href="../blog/item-review.html">Article Review</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="../login/"> <i class="ion-android-person"></i> Login </a></li>
                                <li class="active"><a href="../signup/"> Sign Up</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <hr class="offset-md" />

                <div class="box">
                    <div class="container">
                        <h1>Seller Items</h1>
                        <hr class="offset-sm" />
                    </div>
                </div>

                <hr class="offset-md" />

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="checkout-cart">

                                        <div class="content">
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-14.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href onClick={this.onClick} >
                                                        <img class="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h2 class="h4 media-heading">HP Chromebook 11</h2>
                                                    <label>Laptops</label>
                                                    <p class="price">$199.99</p>
                                                </div>
                                                <div class="controls">
                                                    <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div class="about">
                        <div class="container">
                            <div class="row">

                                <hr class="offset-md" />

                                <div class="col-xs-6 col-sm-3">
                                    <div class="item">
                                        <i class="ion-ios-telephone-outline" />
                                        <h1>24/7 free <br /> <span>support</span></h1>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-3">
                                    <div class="item">
                                        <i class="ion-ios-star-outline"></i>
                                        <h1>Low price <br /> <span>guarantee</span></h1>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-3">
                                    <div class="item">
                                        <i class="ion-ios-gear-outline"></i>
                                        <h1> Manufacturer’s <br /> <span>warranty</span></h1>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-3">
                                    <div class="item">
                                        <i class="ion-ios-loop"></i>
                                        <h1> Full refund <br /> <span>guarantee</span> </h1>
                                    </div>
                                </div>

                                <hr class="offset-md" />

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <hr class="offset-md" />
                    </div>

                    <hr />

                </footer>

            </div>
        )
    }
}

export default Items