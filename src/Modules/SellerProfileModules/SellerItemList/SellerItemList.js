import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = (props) => (
    <tr>
        <td>{props.items.brand}</td>
        <td>{props.items.colour}</td>
        <td>{props.items.os}</td>
        <td>{props.items.processor}</td>
        <td>{props.items.memory}</td>
        <td>{props.items.graphics}</td>
        <td>{props.items.storage}</td>
        <td>{props.items.wifi}</td>
        <td>{props.items.power}</td>
        <td>{props.items.battery}</td>
        <td>{props.items.price}</td>
        <td>
            <button className="edit">
                <Link to={"/edititem/" + props.items._id} className="link">
                    Edit
        </Link>
            </button>{" "}
            <button
                className="delete"
                onClick={() => {
                    props.deleteItem(props.items._id);
                }}
            >
                Delete
      </button>
        </td>
    </tr>
);

export default class SellerItemList extends Component {

    constructor(props) {

        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: [],
            searchItem: "",
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/item/")
            .then((response) => {
                this.setState({ items: response.data });
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteItem(id) {
        axios
            .delete("http://localhost:5000/item/" + id)
            .then((res) => console.log(res.data));

        this.setState({
            items: this.state.items.filter((el) => el._id !== id),
        });
    }

    itemList() {
        return this.state.items.map((currentItems) => {
            return (
                <Item
                    items={currentItems}
                    deleteItem={this.deleteItem}
                    key={currentItems._id}
                />
            );
        });
    }

    searchItemList() {
        return this.state.items.map((currentItems) => {
            if (
                currentItems.brand
                    .toLowerCase()
                    .includes(this.state.searchItem.toLowerCase())
            ) {
                return (
                    <div class="p-4">
                        <tr>
                            <td style={{ width: "20%" }}>{currentItems.brand}</td>
                            <td style={{ width: "20%" }}>{currentItems.colour}</td>
                            <td style={{ width: "20%" }}>{currentItems.os}</td>
                            <td style={{ width: "20%" }}>{currentItems.processor}</td>
                            <td style={{ width: "20%" }}>{currentItems.memory}</td>
                            <td style={{ width: "20%" }}>{currentItems.graphics}</td>
                            <td style={{ width: "20%" }}>{currentItems.storage}</td>
                            <td style={{ width: "20%" }}>{currentItems.wifi}</td>
                            <td style={{ width: "20%" }}>{currentItems.power}</td>
                            <td style={{ width: "20%" }}>{currentItems.battery}</td>
                            <td style={{ width: "20%" }}>{currentItems.price}</td>

                            <td style={{ width: "20%" }}>
                                <div class="row">
                                    {
                                        <button className="edit">
                                            <Link
                                                to={"/edititem/" + currentItems._id}
                                                className="link"
                                            >
                                                Edit
                      </Link>
                                        </button>
                                    }
                                </div>

                                <div class="row">
                                    {
                                        <button
                                            className="delete"
                                            onClick={() => {
                                                //Delete the selected record
                                                axios
                                                    .delete(
                                                        "http://localhost:5000/item/" + currentItems._id
                                                    )
                                                    .then(() => {
                                                        alert("Delete Success");
                                                        //Get data again after delete
                                                        axios
                                                            .get("http://localhost:5000/item")
                                                            .then((res) => {
                                                                console.log(res.data);
                                                                this.setState({
                                                                    items: res.data,
                                                                });
                                                            })
                                                            .catch((err) => console.log(err));
                                                    })
                                                    .catch((err) => {
                                                        alert(err);
                                                    });
                                            }}
                                        >
                                            Delete
                    </button>
                                    }
                                </div>
                            </td>
                        </tr>
                    </div>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <div class="container">
                    <h1>Item List</h1>
                    <br />

                    <div class="row container-fluid">
                        <div class="d-flex justify-content-center">
                            <div class="card rounded col col-md-6 col-lg-8 shadow-lg mb-2 m-5 p-4">
                                <div class="card-body p-2 rounded mw-auto">
                                    <div class="d-flex align-items-center p-1 mx-auto">
                                        <div class="content position-absolute top-50 start-50">
                                            <tr>
                                                <div className="d-flex justify-content-start p-5">
                                                    <input
                                                        style={{ width: "200px", marginTop: "10px" }}
                                                        class="form-control"
                                                        type="text"
                                                        placeholder="Search by Brand Name"
                                                        aria-label="Search"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                searchItem: e.target.value,
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </tr>
                                            <tr>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th className="tbhead">Brand</th>
                                                            <th className="tbhead">Colour</th>
                                                            <th className="tbhead">OS</th>
                                                            <th className="tbhead">Processor</th>
                                                            <th className="tbhead">Memory</th>
                                                            <th className="tbhead">Graphics</th>
                                                            <th className="tbhead">Storage</th>
                                                            <th className="tbhead">WIFI</th>
                                                            <th className="tbhead">Power</th>
                                                            <th className="tbhead">Battery</th>
                                                            <th className="tbhead">Price</th>
                                                            <th className="tbhead">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.searchItem == ""
                                                            ? this.itemList()
                                                            : this.searchItemList()}
                                                    </tbody>
                                                </table>
                                            </tr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
            </div>
        );
    }
}
