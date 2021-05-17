import React, { Component } from 'react'
import Footer from '../../components/Common/Footer/PageFooter'
import Header from '../../components/Common/Header/PageHeader'
import AddItemBody from '../../Modules/SellerModules/AddItem-body'

class AddItem extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddItemBody />
                <Footer />
            </div>
        )
    }
}

export default AddItem
