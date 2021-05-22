import React, { Component } from 'react'

class DetailModule extends Component {
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
                                        <h1 style={{ textAlign: 'center' }}>Username</h1>
                                        <br />
                                        <hr />
                                        <br />
                                        <h3>Profile Details</h3>
                                        <br />
                                        <div class="row specification">
                                            <div class="col-sm-6">
                                                <label>First Name</label>
                                            </div>
                                            <div class="col-sm-6"> <p>fname</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Last Name</label> </div>
                                            <div class="col-sm-6"> <p>lname</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Email</label> </div>
                                            <div class="col-sm-6"> <p>email</p> </div>
                                        </div>
                                        <div class="row specification">
                                            <div class="col-sm-6"> <label>Mobile</label> </div>
                                            <div class="col-sm-6"> <p>mobile</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div class="row">
                                <div style={{ width: '50%', margin: 'auto' }}>
                                    <div class="col-sm-7" style={{ width: '100.3333333%' }}>
                                        <div class="col-sm-4" style={{ width: '50%' }}>
                                            <a href="#Update" class="btn btn-primary btn-lg justify"><i class="iconify" data-icon="akar-icons:edit" data-inline="false"></i>&nbsp;&nbsp;Edit Profile</a>
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

export default DetailModule
