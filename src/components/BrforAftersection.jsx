// import React from 'react'
// import Slider from "react-slick";
// import slidersimage1 from "../Image/Introimage.png";


// import sliderimg3 from "../Image/int.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function BrforAftersection() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,  autoplay: true,
//     autoplaySpeed: 2000
//   };
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-12">
//           <div className="slider-container">
//             <Slider {...settings}>
//               <div>
//                 <img src={sliderimg3} alt="juu" className="img-fluid" />
//               </div>

//               <div>
//                 <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg' alt="juu" className="img-fluid" />
//               </div>

//               <div>
//                 <img src="https://t4.ftcdn.net/jpg/05/57/29/25/360_F_557292539_2kXYz0frOcCGISoYEd2MNTmxyT0lYyOj.jpg" alt="juu" className="img-fluid" />
//               </div>

//               <div>
//                 <img src={sliderimg3} alt="juu" className="img-fluid" />
//               </div>

//               <div>
//                 <img src={sliderimg3} alt="juu" className="img-fluid" />
//               </div>


//             </Slider>
//           </div>
//         </div></div>
//         </div>
//         );
// }

//         export default  BrforAftersection;

import React from "react";
import Slider from "react-slick";
import slidersimage1 from "../Image/Introimage.png";


import sliderimg3 from "../Image/int.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Secondsection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, autoplay: true,
    autoplaySpeed: 2000
  };
  return (

    <div className="container ">
      <h1 className="text-center pt-5">Our Miracle Makeovers..!</h1>
      <div className="row">
        <div className="col-12">
          <div className="slider-container">
            <Slider {...settings}>

              <div>
                <div className="row">
                  <div className="col-md-6 bfimage img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/beforeafter1.png" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h6>Patient result - 100% Natural & Safe</h6>
                    <h5>Age of patient-42 | Male</h5>
                    <p>Client Background: A young professional experiencing early signs of baldness, causing stress and anxiety in social and professional settings.Challenge: Balancing work commitments made it challenging for the client to attend all scheduled follow-up appointments.Treatment: With encouragement from family and friends, the client chose to undergo a FUE procedure at Tune Clinical Aesthetics.Duration: Over six months, the client underwent multiple sessions to complete the process.Result: The procedure conducted by Dr. Sanjitha and his team, resulted in a natural-looking hairline and increased hair density, restoring the client's confidence and improving their overall well-being.</p>
                    <button className="button2">Know More</button>
                  </div>

                </div>
              </div>


              <div>
                <div className="row">
                  <div className="col-md-6 bfimage img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/beforeafter2.png" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h6>Age of patient-42 | Male</h6>
                    <h5>Age of patient-42 | Male</h5>

                    <p>Client Background: A young professional experiencing early signs of baldness, causing stress and anxiety in social and professional settings.Challenge: Balancing work commitments made it challenging for the client to attend all scheduled follow-up appointments.Treatment: With encouragement from family and friends, the client chose to undergo a FUE procedure at Tune Clinical Aesthetics.Duration: Over six months, the client underwent multiple sessions to complete the process.Result: The procedure conducted by Dr. Sanjitha and his team, resulted in a natural-looking hairline and increased hair density, restoring the client's confidence and improving their overall well-being.</p>
                    <button className="button2">Know More</button>
                  </div>

                </div>
              </div>


              <div>
                <div className="row">
                  <div className="col-md-6 bfimage img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/beforeafter3.png" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                  <h6>Age of patient-42 | Male</h6>
                  <h5>Age of patient-42 | Male</h5>


                    <p>Client Background: A young professional experiencing early signs of baldness, causing stress and anxiety in social and professional settings.Challenge: Balancing work commitments made it challenging for the client to attend all scheduled follow-up appointments.Treatment: With encouragement from family and friends, the client chose to undergo a FUE procedure at Tune Clinical Aesthetics.Duration: Over six months, the client underwent multiple sessions to complete the process.Result: The procedure conducted by Dr. Sanjitha and his team, resulted in a natural-looking hairline and increased hair density, restoring the client's confidence and improving their overall well-being.</p>

                    <button className="button2">Know More</button>
                  </div>

                </div>
              </div>



              <div>
                <div className="row">
                  <div className="col-md-6 bfimage img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/beforeafter4.png" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                  <h6>Age of patient-42 | Male</h6>

                  <h5>Age of patient-42 | Male</h5>

                    <p>Client Background: A young professional experiencing early signs of baldness, causing stress and anxiety in social and professional settings.Challenge: Balancing work commitments made it challenging for the client to attend all scheduled follow-up appointments.Treatment: With encouragement from family and friends, the client chose to undergo a FUE procedure at Tune Clinical Aesthetics.Duration: Over six months, the client underwent multiple sessions to complete the process.Result: The procedure conducted by Dr. Sanjitha and his team, resulted in a natural-looking hairline and increased hair density, restoring the client's confidence and improving their overall well-being.</p>

                    <button className="button2">Know More</button>
                  </div>

                </div>
              </div>




            </Slider>
          </div>
        </div></div>
    </div>
  );
}

export default Secondsection;
