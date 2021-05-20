import React, { Component } from 'react'

class FormModule extends Component {
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
                            <form class="join">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text" name="fname" value="" placeholder="First Name" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="lname" value="" placeholder="Last Name" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email" name="email" value="" placeholder="E-mail" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="password" name="password" value="" placeholder="Password" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="password" name="password-confirm" value="" placeholder="Confirm Password" required="" class="form-control" /><br />
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
