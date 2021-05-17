import React, { Component } from 'react'

export default class Storebody extends Component {
    render() {
        return (
<div>
               <hr class="offset-lg"/>

                <div class="container tags">
    

                    <p>Search by tags</p>
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-default btn-xs active">
                            <input type="radio" name="options" id="option1" checked/> All products
                        </label>
                        <label class="btn btn-default btn-xs">
                            <input type="radio" name="options" id="option2"/> Business
                        </label>
                        <label class="btn btn-default btn-xs">
                            <input type="radio" name="options" id="option3"/> Home
                        </label>
                        <label class="btn btn-default btn-xs">
                            <input type="radio" name="options" id="option6"/> Gaming
                        </label>
                    </div>
                </div> 


    <div class="container">
      <div class="row">
        
        <div class="col-sm-9 products" style={{width: 'auto'}}>
          <div class="row">


            <div class="col-sm-6 col-md-4 product" style={{width: '25%'}}>
              <a href="#" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src= "../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11"/></a>

              <div class="content">
                <h1 class="h4">HP Chromebook 11</h1>
                <p class="price">$199.99</p>
                <label>Laptops</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product" style = {{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src= "../assets/img/products/chrome-book-14.jpg" alt="HP Chromebook 14"/></a>

              <div class="content">
                <h1 class="h4">HP Chromebook 14</h1>
                <p class="sale">$209.99</p>
                <p class="price through">$249.99</p>
                <label>Laptops</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product" style={{width: '25%'}}>
              <a href="#favorites" class= "favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/chrome-book-asus.jpg" alt="HP Chromebook 14"/></a>

              <div class="content">
                <h1 class="h4">Asus Chromebook</h1>
                <p class="price">$299.99</p>
                <label>Laptops</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>


            <div class="col-sm-6 col-md-4 product" style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/ipad-air.jpg" alt="iPad Air"/></a>

              <div class="content">
                <h1 class="h4">iPad Air</h1>
                <p class="price">$449.99</p>
                <label>Tablets</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product"style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/ipad-mini.jpg" alt="iPad Mini"/></a>

              <div class="content">
                <h1 class="h4">iPad Mini</h1>
                <p class="price">$399.99</p>
                <label>Tablets</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product"style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/mi-pad-2.jpg" alt="Mi Pad 2"/></a>

              <div class="content">
                <h1 class="h4">Mi Pad 2</h1>
                <p class="sale">$199.99</p>
                <p class="price through">$249.99</p>
                <label>Tablets</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>


            <div class="col-sm-6 col-md-4 product" style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/surface-pro.jpg" alt="Surface Pro"/></a>

              <div class="content">
                <h1 class="h4">Surface Pro</h1>
                <p class="price">$199.99</p>
                <label>Hybrid</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product"style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/lenovo-yoga.jpg" alt="Lenovo Yoga"/></a>

              <div class="content">
                <h1 class="h4">Lenovo Yoga</h1>
                <p class="price">$199.99</p>
                <label>Hybrid</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 product"style={{width: '25%'}}>
              <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
              <a href="#"><img src="../assets/img/products/asus-transformer.jpg" alt="ASUS Transformer"/></a>

              <div class="content">
                <h1 class="h4">ASUS Transformer</h1>
                <p class="price">$199.99</p>
                <label>Hybrid</label>

                <a href="#profile" class="btn btn-link"> Details</a>
                <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
              </div>
            </div>

          </div>

          <nav>
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true"><i class="ion-ios-arrow-left"></i></span>
                </a>
              </li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="disabled"><a href="#">..</a></li>
              <li><a href="#">10</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true"><i class="ion-ios-arrow-right"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </div>
    <br></br>
<footer>
    <div class="about">
        <div class="container">
          <div class="row">
            <hr class="offset-md"/>

            <div class="col-xs-6 col-sm-3">
              <div class="item">
                <i class="ion-ios-telephone-outline"></i>
                <h1>24/7 free <br/> <span>support</span></h1>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="item">
                <i class="ion-ios-star-outline"></i>
                <h1>Low price <br/> <span>guarantee</span></h1>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="item">
                <i class="ion-ios-gear-outline"></i>
                <h1> Manufacturer’s <br/> <span>warranty</span></h1>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3">
              <div class="item">
                <i class="ion-ios-loop"></i>
                <h1> Full refund <br/> <span>guarantee</span> </h1>
              </div>
            </div>

            <hr class="offset-md"/>
          </div>
        </div>
      </div>

      </footer>





 </div>
        )
    }
}
