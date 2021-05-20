import React, { Component } from 'react'
import Header from '../../components/Common/Header/PageHeader'
import Footer from '../../components/Common/Footer/PageFooter'
import ProductInfo from '../../Modules/ProductProfileModules/ProductInfo/ProductInfo'
import ProductSpecifications from '../../Modules/ProductProfileModules/ProductSpecifications/ProductSpecifications'



export default class ProductProfile extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="product">
                    <div class="container">
                        <ProductInfo />
                        <br></br>
                        <ProductSpecifications />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
