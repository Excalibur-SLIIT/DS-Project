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
                            <h1 class="align-center">Seller Edit Pofile</h1>
                            <br />
                            <form class="join" action="./sellerprofile">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="text" name="username" placeholder="Username" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="fname" placeholder="First Name" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="lname" placeholder="Last Name" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="company" placeholder="Company" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="mobile" placeholder="Phone" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="email" name="email" placeholder="E-mail" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="text" name="address" placeholder="Address" required="" class="form-control" /><br />
                                        </div>
                                        <div class="col-sm-12">
                                            <input type="password" name="password" placeholder="Password" required="" class="form-control" /><br />
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
