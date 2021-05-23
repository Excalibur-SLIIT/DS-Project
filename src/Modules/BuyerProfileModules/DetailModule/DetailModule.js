import React, { Component } from 'react'
import axios from 'axios';

class DetailModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            address: ""
        }
    }

    componentDidMount() {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/buyer/auth", "", config).then((res) => {
            this.setState({
                username: res.data.username,
                password: res.data.password,
                fname: res.data.fname,
                lname: res.data.lname,
                email: res.data.email,
                mobile: res.data.mobile,
                address: res.data.address,
            })
        }).catch((err) => { })

    }
    render() {
        return (
            <div>
                <hr class="offset-lg"></hr>
                <div class="product">
                    <div class="container">
                        <div class="row">
                            <br /><br /><br />
                            <div class="row">
                                <div style={{ width: '50%', margin: 'auto' }}>
                                    <div class="col-sm-7" style={{ width: '100.3333333%' }}>
                                        <h1 style={{ textAlign: 'center' }}>Welcome {this.state.username}</h1>
                                        <br />
                                        <hr />
                                        <br />
                                        <h3>Profile Details</h3>
                                        <br />
                                        <div class="row specification">
                                            <div class="col-sm-6"><label>First Name</label></div>
                                            <div class="col-sm-6"> <p>{this.state.fname}</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Last Name</label> </div>
                                            <div class="col-sm-6"> <p>{this.state.lname}</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Email</label> </div>
                                            <div class="col-sm-6"> <p>{this.state.email}</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Mobile</label> </div>
                                            <div class="col-sm-6"> <p>{this.state.mobile}</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Address</label> </div>
                                            <div class="col-sm-6"> <p>{this.state.address}</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div class="row">
                                <div style={{ width: '50%', margin: 'auto' }}>
                                    <div class="col-sm-7" style={{ width: '100.3333333%' }}>
                                        <div class="col-sm-4" style={{ width: '50%' }}>
                                            <a href="/buyereditprofile" class="btn btn-primary btn-lg justify"><i class="iconify" data-icon="akar-icons:edit" data-inline="false"></i>&nbsp;&nbsp;Edit Profile</a>
                                        </div>
                                        <div class="col-sm-4" style={{ width: '50%' }}>
                                            <a href="#Remove" class="btn btn-primary btn-lg justify" onClick={() => { localStorage.removeItem("x-auth-token"); window.location = "/" }}><i class="ion-trash-b"></i>&nbsp;&nbsp; Delete Account</a>
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

export default DetailModule
