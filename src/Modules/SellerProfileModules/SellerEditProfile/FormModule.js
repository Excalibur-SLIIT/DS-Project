import React, { Component } from 'react'
import axios from 'axios'

class FormModule extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            username: "",
            fname: "",
            lname: "",
            companyName: "",
            email: "",
            mobile: "",
            address: "",
        }
    }

    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/seller/auth", "", config).then((res) => {
            this.setState({
                id: res.data._id,
                username: res.data.username,
                fname: res.data.fname,
                lname: res.data.lname,
                companyName: res.data.companyName,
                email: res.data.email,
                mobile: res.data.mobile,
                address: res.data.address,
            })
        }).catch((err) => { })

    }

    onUpdate(e) {

        e.preventDefault();

        const seller = {
            username: this.state.username,
            fname: this.state.fname,
            lname: this.state.lname,
            companyName: this.state.companyName,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
        }

        axios.put('http://localhost:5000/seller/' + this.state.id, seller)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        window.location = "./sellerprofile";
    }


    render() {
        return (
            <div>
                <hr class="offset-lg hidden-xs" />
                <hr class="offset-md" />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 class="align-center">Seller Edit Pofile</h1>
                            <br />
                            <form class="join" onSubmit={this.onUpdate}>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="username"
                                                placeholder="Username"
                                                required=""
                                                class="form-control"
                                                value={this.state.username}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="fname"
                                                placeholder="First Name"
                                                required=""
                                                class="form-control"
                                                value={this.state.fname}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="lname"
                                                placeholder="Last Name"
                                                required=""
                                                class="form-control"
                                                value={this.state.lname}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="company"
                                                placeholder="Company"
                                                required=""
                                                class="form-control"
                                                value={this.state.companyName}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="mobile"
                                                placeholder="Phone"
                                                required=""
                                                class="form-control"
                                                value={this.state.mobile}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email"
                                                name="email"
                                                placeholder="E-mail"
                                                required=""
                                                class="form-control"
                                                value={this.state.email}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="address"
                                                placeholder="Address"
                                                required=""
                                                class="form-control"
                                                value={this.state.address}
                                                onChange={(e) => { this.onValueChange(e); }}
                                            /><br />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary">Edit Your Profile</button>
                                <br />
                                <br />
                            </form>
                            <br class="hidden-sm hidden-md hidden-lg" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr class="hidden-xs" />
                <br class="hidden-xs" />
                <br class="hidden-xs" />
            </div>
        )
    }
}

export default FormModule
