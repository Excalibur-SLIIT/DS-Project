import React, { Component } from 'react'
import Header from '../../components/Common/Header/PageHeader'
import Footer from '../../components/Common/Footer/PageFooter'
import SellerDetails from '../../Modules/SellerProfileModules/SellerDetails/SellerDetails'
import SellerItemList from '../../Modules/SellerProfileModules/SellerItemList/SellerItemList'

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
