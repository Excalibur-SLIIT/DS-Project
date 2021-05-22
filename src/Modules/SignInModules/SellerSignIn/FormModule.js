import React, { Component } from 'react'

class FormModule extends Component {
    render() {
        return (
            <div style={{ marginBottom: "120px" }}>
                <hr class="offset-lg hidden-xs" />
                <hr class="offset-md" />
                <div class="container signin">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                            <h1 class="align-center">Seller Sign In</h1>
                            <form class="signin" action="index.php" method="post">
                                <input type="email" name="email" value="" placeholder="E-mail" required="" class="form-control" />
                                <br />
                                <input type="password" name="password" value="" placeholder="Password" required="" class="form-control" />
                                <br />
                                <button type="submit" class="btn btn-primary">Sign In</button>
                                <a href="#forgin-password" data-action="Forgot-Password" class="xs-margin">Forgot Password</a>
                                <br />
                                <br />
                                <p>
                                    Don't have an account? Create one now! <a href="#signup"> Sign Up</a>
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
