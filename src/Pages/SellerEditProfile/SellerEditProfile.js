import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import FormModule from '../../Modules/SellerProfileModules/SellerEditProfile/FormModule'

class SellerEditProfile extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <FormModule />
                <PageFooter />
            </div>
        )
    }
}

export default SellerEditProfile
