import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import StoreBody from '../../Modules/StoreModules/StoreBody'

class Store extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <StoreBody/>
                <PageFooter/>
            </div>
        )
    }
}
export default Store