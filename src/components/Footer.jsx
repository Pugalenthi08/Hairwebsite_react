import React from 'react'

const Footer = () => {
    return (
        <div className="container5">
            <div className="row">
                <div className="col-md-4 footerbox1">
                    <h1>NourishHair</h1>

                </div>

                <div className="col-md-4 footer2">
                    <div>
                        <h5>Menu</h5>
                        <ul>
                            <li>Home</li>
                            <li>Product/Services</li>
                            <li>cart</li>
                            <li>Contact us</li>
                        </ul>
                        {/* <h6>Home</h6>
                        <h6>Product and services</h6>
                        <h6>About</h6>
                        <h6>Contact us</h6> */}
                    </div>
                   
                </div>
                <div className="col-md-4 footer3">
                <div>
                        <h5>Follow us :</h5>


                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Footer;