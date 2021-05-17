import React, { Component } from 'react'

class CartProductsModule extends Component {
    render() {
        return (
            <div>
                <div class="col-md-8">
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
                                            <h2 class="h4 media-heading">Brand</h2>
                                            <label>Laptops</label>
                                            <p class="price">Price</p>
                                        </div>
                                        <div class="controls">
                                            <div class="input-group">
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default btn-sm" type="button" data-action="minus"><i class="ion-minus-round"></i></button>
                                                </span>
                                                <input type="text" class="form-control input-sm" placeholder="Qty" value="1" readonly="" />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default btn-sm" type="button" data-action="plus"><i class="ion-plus-round"></i></button>
                                                </span>
                                            </div>
                                            <a href="#remove"> <i class="ion-trash-b"></i> Remove </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartProductsModule
