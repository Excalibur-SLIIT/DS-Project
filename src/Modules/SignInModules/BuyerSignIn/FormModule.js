import React, { Component } from 'react';
import axios from 'axios';

class FormModule extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onSignIn = this.onSignIn.bind(this);

        this.state = {
            username: "",
            password: "",
        }
    }

    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSignIn(e) {

        e.preventDefault();

        const buyer = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:5000/buyer/login', buyer)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));
    }
    render() {
        return (
            <div style={{ marginBottom: "120px" }}>
                <hr class="offset-lg hidden-xs" />
                <hr class="offset-md" />
                <div class="container signin">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 class="align-center">Buyer Sign In</h1>
                            <form class="signin" onSubmit={this.onSignIn}>
                                <input type="text" name="username" value={this.state.username} placeholder="Username" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} />
                                <br />
                                <input type="password" name="password" value={this.state.password} placeholder="Password" required="" class="form-control" onChange={(e) => { this.onValueChange(e); }} />
                                <br />
                                <button type="submit" class="btn btn-primary">Sign In</button>
                                <a href="#forgin-password" data-action="Forgot-Password" class="xs-margin">Forgot Password</a>
                                <br />
                                <br />
                                <p>
                                    Don't have an account? Create one now! <a href="/buyersignup"> Sign Up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br class="hidden-xs" />
                <br class="hidden-xs" />
            </div>
        )
    }
}

export default FormModule
