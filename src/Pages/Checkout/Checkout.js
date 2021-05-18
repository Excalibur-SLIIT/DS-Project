import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import HeadingModule from '../../Modules/CheckoutModules/HeadingModule/HeadingModule'
import OrderDetailModule from '../../Modules/CheckoutModules/OrderDetailModule/OrderDetailModule'
import ProceedOrderModule from '../../Modules/CheckoutModules/ProceedOrderModule/ProceedOrderModule'

class Checkout extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <HeadingModule />
                <div class="container">
                    <div class="row">
                        <OrderDetailModule />
                        <ProceedOrderModule />
                    </div>
                </div>
                <PageFooter />
            </div>
        )
    }
}

export default Checkout
