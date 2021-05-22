import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import FormModule from '../../Modules/BuyerEditProfileModules/FormModule/FormModule'

class BuyerEditProfile extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <FormModule/>
                <PageFooter/>
            </div>
        )
    }
}

export default BuyerEditProfile
