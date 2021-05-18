import React, { Component } from 'react'
import Header from '../../components/Common/Header/PageHeader'
import Footer from '../../components/Common/Footer/PageFooter'
import CustomerDeatils from '../../Modules/CustomerProfileModules/CustomerDetails/CustomerDetails'
import CustomerOrderedHistory from '../../Modules/CustomerProfileModules/CustomerOrderHistory/CustomerOrderHistory'


export default class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <Header />
                <CustomerDeatils />
                <CustomerOrderedHistory />
                <Footer />
            </div>
        )
    }
}
