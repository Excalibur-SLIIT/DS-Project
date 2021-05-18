import React, { Component } from 'react'

class ProceedOrderModule extends Component {
    render() {
        return (
            <div>
                <div class="col-sm-8 col-md-4">
                    <hr class="offset-sm visible-sm" />
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <h2 class="no-margin">Summary</h2>
                            <hr class="offset-md" />
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <p>Subtotal (7 items)</p>
                                        <p>Discount</p>
                                        <p>Delivery</p>
                                    </div>
                                    <div class="col-xs-6">
                                        <p><b>$1499</b></p>
                                        <p><b>$0</b></p>
                                        <p><b>$0</b></p>
                                    </div>
                                </div>
                            </div>
                            <div class="checkboxes">
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                                        Promotional Codes
                                    </label>
                                    <hr class="offset-xs" />
                                    <div class="input-group">
                                        <input type="text" class="form-control input-sm" placeholder="Insert code" />
                                        <span class="input-group-btn">
                                            <button class="btn btn-primary btn-sm" type="button">Apply</button>
                                        </span>
                                    </div>
                                    <hr class="offset-sm" />
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Coupon
                                    </label>
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
                            <button class="btn btn-primary btn-lg justify"><i class="ion-compose"></i>&nbsp;&nbsp; Confirm order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProceedOrderModule
