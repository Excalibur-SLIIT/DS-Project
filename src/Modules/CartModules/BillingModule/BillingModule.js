import React, { Component } from 'react'

class BillingModule extends Component {
    render() {
        return (
            <div>
                <div class="col-sm-8 col-md-4">
                    <hr class="offset-md visible-sm" />
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <h2 class="no-margin">Summary</h2>
                            <hr class="offset-md" />

                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <p>Subtotal (7 items)</p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p><b>$1499</b></p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h3 class="no-margin">Total sum</h3>
                                    </div>
                                    <div class="col-xs-6">
                                        <h3 class="no-margin">$1499</h3>
                                    </div>
                                </div>
                            </div>
                            <hr class="offset-md" />

                            <a href="../checkout/" class="btn btn-primary btn-lg justify"><i class="ion-android-checkbox-outline"></i>&nbsp;&nbsp; Checkout order</a>
                            <hr class="offset-md" />

                            <p>Pay your order in the most convenient way</p>
                            <div class="payment-icons">
                                <img src="../assets/img/payments/icon-paypal.svg" alt="paypal" />
                                <img src="../assets/img/payments/icon-visa.svg" alt="visa" />
                                <img src="../assets/img/payments/icon-mc.svg" alt="mc" />
                                <img src="../assets/img/payments/icon-discover.svg" alt="discover" />
                                <img src="../assets/img/payments/icon-ae.svg" alt="ae" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingModule