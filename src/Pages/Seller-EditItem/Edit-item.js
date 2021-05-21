import React, { Component } from 'react'
import Footer from '../../components/Common/Footer/PageFooter'
import Header from '../../components/Common/Header/PageHeader'
import EditItemBody from '../../Modules/SellerModules/EditItem-body'

class AddItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <EditItemBody id={this.props.match.params.id} />
                <Footer />
            </div>
        )
    }
}

export default AddItem
