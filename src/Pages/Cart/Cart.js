import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import Footer from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import Header from '../../components/Common/Header/PageHeader'
import BillingModule from '../../Modules/CartModules/BillingModule/BillingModule'
import CartProductsModule from '../../Modules/CartModules/CartProductsModule/CartProductsModule'
import HeadingModule from '../../Modules/CartModules/HeadingModule/HeadingModule'

class Cart extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <HeadingModule />
                <div class="container">
                    <div class="row">
                        <CartProductsModule />
                        <BillingModule />
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default Cart
