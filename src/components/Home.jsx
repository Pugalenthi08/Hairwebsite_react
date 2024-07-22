import React from 'react'
import Introsection from "./Introsection"
import Secondsection from "./Secondsection"
import Treatmentsection from './Treatmentsection'
import BrforAftersection from './BrforAftersection'
import Products from './Products'
import FreeCon from './FreeCon'
import ContactPage from './ContactPage'
import Footer from './Footer'
import ProductListing from "./Productlisting"
import Count from './Count'

const Home = () => {
    return (
        <>
            <div className="container">
                <Introsection className="mt-5" />
                <Secondsection className="mt-5" />
                <Treatmentsection  className="mt-5" />
                <BrforAftersection  className="mt-5" />
                <Footer />
                <ProductListing/>
                <Count />
                
               
               
            </div>

        </>
    )
}

export default Home