import React from 'react'

const ContactPage = () => {
    return (
        <div className="container pt-5">
            <h1 className='text-center pb-5'>Contact us..!</h1>
            <div className="row">
                <div className="col-md-6 contactimage">
                    <img src="../Image/contactimage.png" alt="" />

                </div>

                <div className="col-md-6">
                    <div className='contactbox'>
                        <input type="text" placeholder='Enter name...' />
                        <input type="text" placeholder='Enter number...' />
                    </div>
                    <div>
                    {/* <label htmlFor="">Problems</label><br /> */}
                    <textarea name="" id="" placeholder='Enter your problems...' className='my-3'></textarea>
                    </div>
                    <button className='contactbutton'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage