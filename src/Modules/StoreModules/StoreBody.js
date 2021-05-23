import React, { Component } from 'react'

export default class Storebody extends Component {
  render() {
    return (
      <div>
        <hr class="offset-lg" />

        <div class="container">
          <div class="row">
            <div class="col-sm-9 products" style={{ width: 'auto' }}>
              <div class="row">

                <div class="col-sm-6 col-md-4 product store-product">
                  <a href="#"><img src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" /></a>
                  <div class="content">
                    <h1 class="h4">Laptop Name</h1>
                    <p class="price">Price</p>
                    <label>Brand</label>
                    <a href="#profile" class="btn btn-link"> Details</a>
                    <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <br>
        </br>
      </div>
    )
  }
}
