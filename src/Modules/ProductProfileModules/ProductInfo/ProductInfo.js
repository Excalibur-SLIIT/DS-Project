import React, { Component } from 'react'

export default class ProductInfo extends Component {
    render() {
        return (
<div>
                <hr class="offset-lg"/>

                
                    <div class="row">
                    <div class="col-sm-7 col-md-7">
                        <div class="carousel product" data-count="5" data-current="1">
                        
                        <div class="items">
                            <div class="item active" data-marker="1">
                            <img src="../assets/img/product/1.jpg" alt="ChromeBook 11"/>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-5 col-md-5">
                        <br></br>
                        <br></br>
                        <br></br>

                        <h1>HP Chromebook 11</h1>

                        <p> &middot; Chrome OS™</p>
                        <p> &middot; Intel® Celeron® processor</p>
                        <p> &middot; Intel HD Graphics</p>

                        <p class="price">$209.99</p>
                        <p class="price through">$249.99</p>
                        <br></br>

                        <button class="btn btn-primary btn-rounded"> <i class="ion-bag"></i> Add to cart</button>
                    </div>
                    </div>
                        <br></br>




</div>
        )
    }
}
