import React, { Component } from 'react'
import axios from 'axios'

export default class SellerDetails extends Component {

    constructor(props) {
        super(props);
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
                password: res.data.password,
                companyName: res.data.companyName,
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
                                        <h1 style={{ textAlign: 'center' }}>{this.state.username}</h1>
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
                                            <div class="col-sm-6"> <label>Company</label> </div>
                                            <div class="col-sm-6"> <p>{this.state.companyName}</p> </div>
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
                                            <a href="/selleredit" class="btn btn-primary btn-lg justify"><i class="iconify" data-icon="akar-icons:edit" data-inline="false"></i>&nbsp;&nbsp;Edit Profile</a>
                                        </div>
                                        <div class="col-sm-4" style={{ width: '50%' }}>
                                            <a href="#Remove" class="btn btn-primary btn-lg justify"><i class="ion-trash-b"></i>&nbsp;&nbsp; Delete Account</a>
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
