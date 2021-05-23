import React, { Component } from 'react';
import axios from 'axios';

const Item = (props) => (
  <div class="col-sm-6 col-md-4 product store-product">
    <a href="#"><img src={"http://localhost:5000/images/item-image/" + props.items.image.filename} alt="HP Chromebook 11" /></a>
    <div class="content">
      <h1 class="h4">{props.items.brand}</h1>
      <p class="price">{props.items.price}</p>
      <label>{props.items.processor}</label>
      <a href="#profile" class="btn btn-link"> Details</a>
      <button class="btn btn-primary btn-rounded btn-sm"> <i class="ion-bag"></i> Add to cart</button>
    </div>
  </div>
);
export default class Storebody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/item/")
      .then((response) => {
        this.setState({ items: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  itemList() {
    return this.state.items.map((currentItems) => {
      console.log(currentItems)
      return (
        <Item items={currentItems} key={currentItems._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <hr class="offset-lg" />

        <div class="container">
          <div class="row">
            <div class="col-sm-9 products" style={{ width: 'auto' }}>
              <div class="row">

                {this.state.items == this.itemList()}

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
