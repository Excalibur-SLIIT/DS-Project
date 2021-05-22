import React, { Component } from 'react'

export default class SellerDetails extends Component {
    render() {
        return (
            <div>

            <hr class="offset-lg"></hr>

            <div class="product">
                <div class="container">
                <div class="row">
                
                    <br/><br/><br/>


                    <div class="row">
                

                <div  style={{width: '50%',margin: 'auto'}}>
                        <div class="col-sm-7" style={{width: '100.3333333%'}}>
                            <h1 style={{textAlign: 'center'}}>user name</h1>
                            <br/>
                    <hr/>
                            <br/>

                    <h3>Profile Details</h3>
                    <br/>

                    <div class="row specification">
                        <div class="col-sm-6"> 
                        <label>Operating system</label> 
                        </div>
                        <div class="col-sm-6"> <p>Chrome OS™</p> </div>
                    </div>
                    
                    <div class="row specification">
                        <div class="col-sm-6"> <label>Processor</label> </div>
                        <div class="col-sm-6"> <p>Intel® Celeron® N2840 with Intel® HD Graphics (2.16 GHz, up to 2.58 GHz, 1 MB cache, 2 cores)</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Processor technology</label> </div>
                        <div class="col-sm-6"> <p>Intel Turbo Boost Technology</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Graphics</label> </div>
                        <div class="col-sm-6"> <p>Intel HD Graphics</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Memory</label> </div>
                        <div class="col-sm-6"> <p>2 GB DDR3L SDRAM (onboard)</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Hard drive</label> </div>
                        <div class="col-sm-6"> <p>16 GB eMMC</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Wireless</label> </div>
                        <div class="col-sm-6"> <p>802.11ac (2x2) and Bluetooth® 4.0 combo</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Power supply</label> </div>
                        <div class="col-sm-6"> <p>45 W AC power adapter</p> </div>
                    </div>

                    <div class="row specification">
                        <div class="col-sm-6"> <label>Battery</label> </div>
                        <div class="col-sm-6"> <p>3-cell, 36 Wh Li-ion</p> </div>
                    </div>
                </div>
                </div>
                
                    </div>

                    <br/><br/>
                    <div class="row"> 
                        <div  style={{width: '50%',margin: 'auto'}}>
                           <div class="col-sm-7" style={{width: '100.3333333%'}}>
                                <div class="col-sm-4" style={{width: '50%'}}> 
                                <a href="#Update" class="btn btn-primary btn-lg justify"><i class="iconify"data-icon="akar-icons:edit" data-inline="false"></i>&nbsp;&nbsp;Edit Profile</a>
                                </div>
                                 <div class="col-sm-4" style={{width: '50%'}}> 
                                 <a href="#Remove" class="btn btn-primary btn-lg justify"><i class="ion-trash-b"></i>&nbsp;&nbsp; Delete Account</a>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            </div>
            <br/><br/>

</div>
        )
    }
}
