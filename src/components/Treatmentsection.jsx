import React from 'react'
// import icon from "../Image/icon1.png"

const Treatmentsection = () => {
    return (
        <>
            <div className="container1 mt-4">
            <h2 className='icon pb-2'>Your Hair Treatment Journey..!</h2>

                <div className="row treatment">
                    <div className="col-md-4">
                        <img src="../Image/icon1.png" alt="" />
                        <h5>Step 1</h5>
                        <h4>  Initial Consultation</h4>
                        <p>Welcome to the first step of your hair growth journey! During the initial consultation, our experts will assess your hair and scalp condition. We'll discuss your hair growth goals and medical history to create a personalized treatment plan tailored to your unique needs.</p>
                    </div>

                    <div className="col-md-4">
                        <img src="../Image/icon2.png" alt="" />
                        <h5>Step 2</h5>
                        <h4>  Customized Treatment Plan</h4>
                        <p>Based on the consultation, we’ll design a customized treatment plan just for you. This plan includes a combination of proven hair growth methods, recommended products, and lifestyle tips to ensure optimal results. We’ll provide you with a detailed schedule and instructions for each stage of the treatment.</p>                    </div>

                    <div className="col-md-4">
                        <img src="../Image/icon3.png" alt="" />
                        <h5>Step 3</h5>
                        <h4> Starting the Treatment </h4>
                        <p>Whether it’s topical applications, oral supplements, or specialized therapies, our team will guide you through each step. You’ll receive clear instructions on how to use the products and follow the regimen at home.</p>                    </div>
                </div>
            </div>

        </>
    )
}

export default Treatmentsection