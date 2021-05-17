import React, { Component } from 'react'
import Footer from '../../components/Common/Footer/PageFooter'
import Header from '../../components/Common/Header/PageHeader'
import BrandSection from '../../Modules/HomeModules/BrandSection/BrandSection'
import DisplaySection from '../../Modules/HomeModules/DisplaySection/DisplaySection'
import NewProductsSection from '../../Modules/HomeModules/NewProductsSection/NewProductsSection'
import SearchSection from '../../Modules/HomeModules/SearchSection/SearchSection'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <DisplaySection />
                <SearchSection />
                <BrandSection />
                <NewProductsSection />
                <Footer />
            </div>
        )
    }
}

export default Home
