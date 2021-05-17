import React, { Component } from 'react'
import Header from '../../components/Common/Header/PageHeader'
import Footer from '../../components/Common/Footer/PageFooter'
import SellerDetails from '../../Modules/SellerAccModules/SellerDetails/SellerDetails'
import SellerItemList from '../../Modules/SellerAccModules/SellerItemList/SellerItemList'

export default class SellerAccount extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SellerDetails/>
                <SellerItemList/>
                <Footer/>
            </div>
        )
    }
}
