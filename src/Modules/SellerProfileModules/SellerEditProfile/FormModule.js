import React, { Component } from 'react'
import axios from 'axios'

class FormModule extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

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

    componentDidMount() {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/seller/auth", "", config).then((res) => {
            this.setState({

                username: res.data.username,
                fname: res.data.fname,
                lname: res.data.lname,
                companyName: res.data.companyName,
                email: res.data.email,
                mobile: res.data.mobile,
                address: res.data.address,
                password: res.data.password,

            })
        }).catch((err) => { })

    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    onChangeFname(event) {
        this.setState({
            fname: event.target.value
        });
    }
    onChangeLname(event) {
        this.setState({
            lname: event.target.value
        });
    }
    onChangeCompany(event) {
        this.setState({
            companyName: event.target.value
        });
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    onChangeMobile(event) {
        this.setState({
            mobile: event.target.value
        });
    }
    onChangeAddress(event) {
        this.setState({
            address: event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        const Seller = {

            username: this.state.username,
            fname: this.state.fname,
            lname: this.state.lname,
            companyName: this.state.companyName,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
            password: this.state.password,

        }

        console.log(Seller);

        axios.post("http://localhost:5000/seller/auth", "", Seller)
            .then(res => console.log(res.data));

        window.location = '../sellerprofile';
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
                            <form class="join" onSubmit={this.onSubmit}>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="username"
                                                placeholder="Username"
                                                required=""
                                                class="form-control"
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="fname"
                                                placeholder="First Name"
                                                required=""
                                                class="form-control"
                                                value={this.state.fname}
                                                onChange={this.onChangeFname}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="lname"
                                                placeholder="Last Name"
                                                required=""
                                                class="form-control"
                                                value={this.state.lname}
                                                onChange={this.onChangeLname}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="company"
                                                placeholder="Company"
                                                required=""
                                                class="form-control"
                                                value={this.state.companyName}
                                                onChange={this.onChangeCompany}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="mobile"
                                                placeholder="Phone"
                                                required=""
                                                class="form-control"
                                                value={this.state.mobile}
                                                onChange={this.onChangeMobile}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email"
                                                name="email"
                                                placeholder="E-mail"
                                                required=""
                                                class="form-control"
                                                value={this.state.email}
                                                onChange={this.onChangeEmail}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text"
                                                name="address"
                                                placeholder="Address"
                                                required=""
                                                class="form-control"
                                                value={this.state.address}
                                                onChange={this.onChangeAddress}
                                            /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="password"
                                                name="password"
                                                placeholder="Password"
                                                required=""
                                                class="form-control"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
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
