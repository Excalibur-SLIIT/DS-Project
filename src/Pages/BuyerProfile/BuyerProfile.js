import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import DetailModule from '../../Modules/BuyerProfileModules/DetailModule/DetailModule'
import PurchaseHistoryModule from '../../Modules/BuyerProfileModules/PurchaseHistoryModule/PurchaseHistoryModule'

class BuyerProfile extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <DetailModule />
                <PurchaseHistoryModule />
                <PageFooter />
            </div>
        )
    }
}

export default BuyerProfile
