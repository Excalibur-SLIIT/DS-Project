import React, { Component } from 'react'
/***import Footer from '../../Components/Common/Footer/Footer'***/
import Header from '../../components/Common/Header/PageHeader'
import FormModule from '../../Modules/SignInModules/FormModule/FormModule'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Header />
                <FormModule />
                {/****<Footer />****/}
            </div>
        )
    }
}

export default SignIn