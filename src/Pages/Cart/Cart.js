import React, { Component } from 'react'
import Footer from '../../Components/Common/Footer/Footer'
import Header from '../../Components/Common/Header/Header'
import BillingModule from '../../Modules/CartModules/BillingModule/BillingModule'
import CartProductsModule from '../../Modules/CartModules/CartProductsModule/CartProductsModule'
import HeadingModule from '../../Modules/CartModules/HeadingModule/HeadingModule'

class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                <HeadingModule />
                <div class="container">
                    <div class="row">
                        <CartProductsModule />
                        <BillingModule />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart
