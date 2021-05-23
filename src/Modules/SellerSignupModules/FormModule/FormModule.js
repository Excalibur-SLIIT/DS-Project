import React, { Component } from 'react'
import axios from 'axios';

class FormModule extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            username: "",
            fname: "",
            lname: "",
            companyName: "",
            email: "",
            mobile: "",
            address: "",
            password: ""
        }
    }

    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onRegister(e) {

        e.preventDefault();

        const seller = {
            username: this.state.username,
            fname: this.state.fname,
            lname: this.state.lname,
            password: this.state.password,
            companyName: this.state.companyName,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
        }

        axios.post('http://localhost:5000/seller/', seller)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        window.location = "./sellersignin";

    }
    render() {
        return (
            <div>
                <hr class="offset-lg hidden-xs" />
                <hr class="offset-md" />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 class="align-center">Sign Up As A Seller</h1>
                            <br />
                            <form class="join" onSubmit={this.onRegister}>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text" name="username" value={this.state.username} placeholder="Username" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="fname" value={this.state.fname} placeholder="First Name" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="lname" value={this.state.lname} placeholder="Last Name" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="companyName" value={this.state.companyName} placeholder="Company Name" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="mobile" value={this.state.phone} placeholder="Phone" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email" name="email" value={this.state.email} placeholder="E-mail" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="address" value={this.state.address} placeholder="Address" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="password" name="password" value={this.state.password} placeholder="Password" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                                <br /><br />
                            </form>
                            <br class="hidden-sm hidden-md hidden-lg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormModule
