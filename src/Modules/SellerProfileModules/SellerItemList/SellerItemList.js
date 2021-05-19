import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
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
        <td>{props.items.date.substring(0, 10)}</td>
        <td>
            <button className='delete' onClick={() => { props.deleteItem(props.items._id) }}>Delete</button>
        </td>
    </tr >
)

export default class SellerItemList extends Component {

    constructor(props) {

        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: [],
            searchItem: ""
        };

    }



    componentDidMount() {

        axios.get('http://localhost:5000/item/')
            .then(response => {

                this.setState({ items: response.data })
                console.log(response.data);
            })
            .catch((error) => {

                console.log(error);
            })
    }

    deleteItem(id) {

        axios.delete('http://localhost:5000/item/' + id)
            .then(res => console.log(res.data));

        this.setState({

            items: this.state.items.filter(el => el._id !== id)
        })
    }

    itemList() {
        return this.state.items.map(currentItems => {
            return <Item items={currentItems} deleteItem={this.deleteItem} key={currentItems._id} />;
        })
    }

    searchItemList() {

        return this.state.items.map((currentItems) => {
            if (
                (currentItems.brand.toLowerCase().includes(this.state.searchItem.toLowerCase()))
            ) {
                return (
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
                        <td style={{ width: "20%" }}>{currentItems.date.substring(0, 10)}</td>

                        <td style={{ width: "20%" }}>
                            {
                                <button className="edit">
                                    <Link
                                        to={"/editItem/" + currentItems._id}
                                        className="link"
                                    >
                                        Edit
                                </Link>
                                </button>
                            }
                            {"  "}
                            {
                                <button
                                    className="delete"
                                    onClick={() => {
                                        //Delete the selected record
                                        axios
                                            .delete(
                                                "http://localhost:5000/items/" + currentItems._id
                                            )
                                            .then(() => {
                                                alert("Delete Success");
                                                //Get data again after delete
                                                axios
                                                    .get("http://localhost:5000/items")
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
                        </td>
                    </tr>
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

                    <div class="row">
                        <div class="d-flex justify-content-center">
                            <div class="card rounded col col-md-6 col-lg-6 shadow-lg mb-2 mx-auto p-4">

                                <div class="card-body p-2 rounded mw-auto">
                                    <div class="d-flex align-items-center p-1 mb-2">
                                        <div class="content">
                                            <tr>

                                                <div className="col-md-9 d-flex justify-content-start">
                                                    <input style={{ width: "200px", marginTop: "10px" }}
                                                        class="form-control"
                                                        type="text"
                                                        placeholder="Search by Brand Name"
                                                        aria-label="Search"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                searchItem: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </tr>
                                            <tr>
                                                <div class="d-flex justify-content-center p-3 mb-0">
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
                                                                <th className="tbhead">Date</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.searchItem == "" ? this.itemList() : this.searchItemList()}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </tr>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



                <br /><br />




            </div>
        )
    }
}
