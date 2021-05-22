import React, { Component } from 'react';
import axios from 'axios';


export default class EditItem extends Component {

    constructor(props) {

        super(props);

        this.onChangeSellerId = this.onChangeSellerId.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeColour = this.onChangeColour.bind(this);
        this.onChangeOS = this.onChangeOS.bind(this);
        this.onChangeProcessor = this.onChangeProcessor.bind(this);
        this.onChangeMemory = this.onChangeMemory.bind(this);
        this.onChangeGraphics = this.onChangeGraphics.bind(this);
        this.onChangeStorage = this.onChangeStorage.bind(this);
        this.onChangeWifi = this.onChangeWifi.bind(this);
        this.onChangePower = this.onChangePower.bind(this);
        this.onChangeBattery = this.onChangeBattery.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            sellerId: '',
            brand: '',
            colour: '',
            os: '',
            processor: '',
            memory: '',
            graphics: '',
            storage: '',
            wifi: '',
            power: '',
            battery: '',
            price: '',
        }

    }

    componentDidMount() {

        console.log(this.props.id);

        axios.get('http://localhost:5000/item/' + this.props.id)
            .then(response => {

                this.setState({

                    sellerId: response.data.sellerId,
                    brand: response.data.brand,
                    colour: response.data.colour,
                    os: response.data.os,
                    processor: response.data.processor,
                    memory: response.data.memory,
                    graphics: response.data.graphics,
                    storage: response.data.storage,
                    wifi: response.data.wifi,
                    power: response.data.power,
                    battery: response.data.battery,
                    price: response.data.price
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeSellerId(event) {
        this.setState({
            sellerId: event.target.value
        });
    }

    onChangeBrand(event) {
        this.setState({
            brand: event.target.value
        });
    }
    onChangeColour(event) {
        this.setState({
            colour: event.target.value
        });
    }
    onChangeOS(event) {
        this.setState({
            os: event.target.value
        });
    }
    onChangeProcessor(event) {
        this.setState({
            processor: event.target.value
        });
    }
    onChangeMemory(event) {
        this.setState({
            memory: event.target.value
        });
    }
    onChangeGraphics(event) {
        this.setState({
            graphics: event.target.value
        });
    }
    onChangeStorage(event) {
        this.setState({
            storage: event.target.value
        });
    }
    onChangeWifi(event) {
        this.setState({
            wifi: event.target.value
        });
    }
    onChangePower(event) {
        this.setState({
            power: event.target.value
        });
    }
    onChangeBattery(event) {
        this.setState({
            battery: event.target.value
        });
    }
    onChangePrice(event) {
        this.setState({
            price: event.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        const Item = {

            sellerId: this.state.sellerId,
            brand: this.state.brand,
            colour: this.state.colour,
            os: this.state.os,
            processor: this.state.processor,
            memory: this.state.memory,
            graphics: this.state.graphics,
            storage: this.state.storage,
            wifi: this.state.wifi,
            power: this.state.power,
            battery: this.state.battery,
            price: this.state.price,
        }

        console.log(Item);

        axios.put('http://localhost:5000/item/' + this.props.id, Item)
            .then(res => console.log(res.data));

        window.location = '/sellerprofile';
    }

    render() {
        return (

            <div className="Home">
                <hr className="offset-lg hidden-xs"></hr>
                <hr className="offset-md"></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 className="align-center"> Edit Laptop Details</h1>
                            <br />
                            <form className="join" onSubmit={this.onSubmit}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input type="text"
                                                name="sellerId" value=""
                                                placeholder="Seller ID"
                                                required="" className="form-control"
                                                value={this.state.sellerId}
                                                onChange={this.onChangeSellerId}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text"
                                                name="brand" value=""
                                                placeholder="Brand"
                                                required="" className="form-control"
                                                value={this.state.brand}
                                                onChange={this.onChangeBrand}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="colour"
                                                placeholder="Colour"
                                                required=""
                                                className="form-control"
                                                value={this.state.colour}
                                                onChange={this.onChangeColour}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text"
                                                name="os"
                                                placeholder="Operating System"
                                                required=""
                                                className="form-control"
                                                value={this.state.os}
                                                onChange={this.onChangeOS}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="processor"
                                                placeholder="Processor"
                                                required=""
                                                className="form-control"
                                                value={this.state.processor}
                                                onChange={this.onChangeProcessor}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="memory"
                                                placeholder="Memory"
                                                required=""
                                                className="form-control"
                                                value={this.state.memory}
                                                onChange={this.onChangeMemory}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="graphics"
                                                placeholder="Graphics"
                                                required=""
                                                className="form-control"
                                                value={this.state.graphics}
                                                onChange={this.onChangeGraphics}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="storage"
                                                placeholder="Storage"
                                                required=""
                                                className="form-control"
                                                value={this.state.storage}
                                                onChange={this.onChangeStorage}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="wifi"
                                                placeholder="WIFI"
                                                required=""
                                                className="form-control"
                                                value={this.state.wifi}
                                                onChange={this.onChangeWifi}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="power"
                                                placeholder="Power"
                                                required=""
                                                className="form-control"
                                                value={this.state.power}
                                                onChange={this.onChangePower}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                name="battery"
                                                placeholder="Battery"
                                                required=""
                                                className="form-control"
                                                value={this.state.battery}
                                                onChange={this.onChangeBattery}
                                            /><br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="number"
                                                name="price"
                                                placeholder="Price"
                                                required=""
                                                className="form-control"
                                                value={this.state.price}
                                                onChange={this.onChangePrice}
                                            /><br />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Edit Laptop</button>
                                <br />
                                <br />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}