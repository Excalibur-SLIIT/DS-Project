import React, { Component } from 'react'

class NewProductsSection extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h2>NEW PRODUCTS</h2>
                    <hr class="offset-md" />
                    <div class="row products">

                        <div class="col-sm-6 col-md-4 product">
                            <a href="./"><img src="../assets/img/products/surface-pro.jpg" alt="" /></a>
                            <div class="content">
                                <h1 class="h4">Brand</h1>
                                <p class="price">Price</p>
                                <label>Details</label>
                                <a href="../catalog/product.html" class="btn btn-link"> Details</a>
                                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewProductsSection
