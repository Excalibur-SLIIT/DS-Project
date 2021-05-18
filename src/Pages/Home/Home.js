import React, { Component } from 'react'
import PageFooter from '../../components/Common/Footer/PageFooter'
import Footer from '../../components/Common/Footer/PageFooter'
import PageHeader from '../../components/Common/Header/PageHeader'
import Header from '../../components/Common/Header/PageHeader'
import BrandSection from '../../Modules/HomeModules/BrandSection/BrandSection'
import DisplaySection from '../../Modules/HomeModules/DisplaySection/DisplaySection'
import NewProductsSection from '../../Modules/HomeModules/NewProductsSection/NewProductsSection'
import SearchSection from '../../Modules/HomeModules/SearchSection/SearchSection'

class Home extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <DisplaySection />
                <SearchSection />
                <BrandSection />
                <NewProductsSection />
                <PageFooter/>
            </div>
        )
    }
}

export default Home
