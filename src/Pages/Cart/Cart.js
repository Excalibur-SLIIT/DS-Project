import React, { Component } from 'react'
import Footer from '../../Components/Common/Footer/Footer'
import Header from '../../Components/Common/Header/Header'
import BillingModule from '../../Modules/CartModules/BillingModule/BillingModule'
import CartProductsModule from '../../Modules/CartModules/CartProductsModule/CartProductsModule'

class Cart extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CartProductsModule/>
                <BillingModule/>
                <Footer/>
            </div>
        )
    }
}

export default Cart
