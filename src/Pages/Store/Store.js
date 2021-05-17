import React, { Component } from 'react'
import Footer from '../../components/Common/Footer/PageFooter'
import Header from '../../components/Common/Header/PageHeader'
import StoreBody from '../../Modules/StoreModules/StoreBody'

class Store extends Component {
    render() {
        return (
            <div>
                <Header />
               <StoreBody/>
                <Footer />

            </div>
        )
    }
}
export default Store