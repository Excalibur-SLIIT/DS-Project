import React, { Component } from 'react'
import axios from 'axios';

class FormModule extends Component {
    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            id: "",
            username: "",
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            address: ""
        }
    }
    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        }

        axios.post("http://localhost:5000/buyer/auth", "", config).then((res) => {
            this.setState({
                id: res.data._id,
                username: res.data.username,
                fname: res.data.fname,
                lname: res.data.lname,
                email: res.data.email,
                mobile: res.data.mobile,
                address: res.data.address,
            })
        }).catch((err) => { })
    }
    
    onUpdate(e) {

        e.preventDefault();

        const buyer = {
            username: this.state.username,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
        }

        axios.put('http://localhost:5000/buyer/'+ this.state.id, buyer)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        window.location = "./buyerprofile";
    }

    render() {
        return (
            <div>
                <hr class="offset-lg hidden-xs" />
                <hr class="offset-md" />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 class="align-center">Edit Pofile</h1>
                            <br />
                            <form class="join" onSubmit={this.onUpdate}>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text" name="username" value={this.state.username} placeholder="Username" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="fname" value={this.state.fname} placeholder="First Name" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }}/><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="lname" value={this.state.lname} placeholder="Last Name" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }}/><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="mobile" value={this.state.mobile} placeholder="Phone" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }}/><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email" name="email" value={this.state.email} placeholder="E-mail" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }}/><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="address" value={this.state.address} placeholder="Address" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }}/><br />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary">Edit Profile</button>
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
