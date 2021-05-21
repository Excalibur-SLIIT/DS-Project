import React, { Component } from 'react'
import Footer from '../../components/Common/Footer/PageFooter'
import Header from '../../components/Common/Header/PageHeader'
import EditItemBody from '../../Modules/SellerModules/EditItem-body'

class AddItem extends Component {
    render() {
        return (
            <div>
                <Header />
                <EditItemBody />
                <Footer />
            </div>
        )
    }
}

export default AddItem
