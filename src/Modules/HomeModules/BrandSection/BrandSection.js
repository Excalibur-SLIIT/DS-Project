import React, { Component } from 'react'

class BrandSection extends Component {
    render() {
        return (
        <div>
            <div class="container">
                <h2>TOP BRANDS</h2>
                <hr class="offset-md"/>
                <div class="row brands">

                    <div class="col-sm-6 col-md-4 brand">
                        <a href="#"><img src="../assets/img/brands/Apple.png" alt="" /></a>
                    </div>

                    <div class="col-sm-6 col-md-4 brand">
                        <a href="#"><img src="../assets/img/brands/ROG.png" alt="" /></a>
                    </div>

                    <div class="col-sm-6 col-md-4 brand">
                        <a href="#"><img src="../assets/img/brands/MSI.png" alt="" /></a>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}

export default BrandSection
