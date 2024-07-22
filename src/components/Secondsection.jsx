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
      <h1 className="text-center pb-3">New Arived..!</h1>
      <div className="row">
        <div className="col-12">
          <div className="slider-container">
            <Slider {...settings}>

              <div>
                <div className="row">
                  <div className="col-md-6 image img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/Second1.jpg" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h4>EELHOE  (Hair Growth Oil) </h4>
                    <p>AKTUALISIERUNG: HEUTE IST DER LETZTE TAG DER AKTION Haarausfall? Kahlen Stellen? Haarbruch? Schuppen? Wir alle waren schon dort. Die gute Nachricht ist, dass sie alle reversibel sind, mit der richtigen Behandlung. Und deshalb haben wir diesen ganzheitlichen, All-in-One-Ansatz für die Haargesundheit entwickelt. Entfesseln Sie die Kraft der Natur mit unserem Biologischem Haarwachstumsöl, einer transformierenden natürlichen Ölbehandlung, die sorgfältig entwickelt wurde, um Ihr Haar zu pflegen und Z</p>
                    <button className="button2">Shop Now</button>
                  </div>

                </div>
              </div>


              <div>
                <div className="row">
                  <div className="col-md-6 image img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/Second2.jpg" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h4>EELHOE  (Hair Growth Oil) </h4>
                    <p>AKTUALISIERUNG: HEUTE IST DER LETZTE TAG DER AKTION Haarausfall? Kahlen Stellen? Haarbruch? Schuppen? Wir alle waren schon dort. Die gute Nachricht ist, dass sie alle reversibel sind, mit der richtigen Behandlung. Und deshalb haben wir diesen ganzheitlichen, All-in-One-Ansatz für die Haargesundheit entwickelt. Entfesseln Sie die Kraft der Natur mit unserem Biologischem Haarwachstumsöl, einer transformierenden natürlichen Ölbehandlung, die sorgfältig entwickelt wurde, um Ihr Haar zu pflegen und Z</p>
                    <button className="button2">Shop Now</button>
                  </div>

                </div>
              </div>


              <div>
                <div className="row">
                  <div className="col-md-6 image img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/Second3.jpg" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h4>EELHOE  (Hair Growth Oil) </h4>
                    <p>AKTUALISIERUNG: HEUTE IST DER LETZTE TAG DER AKTION Haarausfall? Kahlen Stellen? Haarbruch? Schuppen? Wir alle waren schon dort. Die gute Nachricht ist, dass sie alle reversibel sind, mit der richtigen Behandlung. Und deshalb haben wir diesen ganzheitlichen, All-in-One-Ansatz für die Haargesundheit entwickelt. Entfesseln Sie die Kraft der Natur mit unserem Biologischem Haarwachstumsöl, einer transformierenden natürlichen Ölbehandlung, die sorgfältig entwickelt wurde, um Ihr Haar zu pflegen und Z</p>
                    <button className="button2">Shop Now</button>
                  </div>

                </div>
              </div>



              <div>
                <div className="row">
                  <div className="col-md-6 image img-fluid">
                    {/* <img src={sliderimg3} alt="juu" className="img-fluid" /> */}
                    <img src="../Image/Second4.jpg" alt="" />
                  </div>
                  <div className="col-md-6 pt-2">
                    <h4>EELHOE  (Hair Growth Oil) </h4>
                    <p>AKTUALISIERUNG: HEUTE IST DER LETZTE TAG DER AKTION Haarausfall? Kahlen Stellen? Haarbruch? Schuppen? Wir alle waren schon dort. Die gute Nachricht ist, dass sie alle reversibel sind, mit der richtigen Behandlung. Und deshalb haben wir diesen ganzheitlichen, All-in-One-Ansatz für die Haargesundheit entwickelt. Entfesseln Sie die Kraft der Natur mit unserem Biologischem Haarwachstumsöl, einer transformierenden natürlichen Ölbehandlung, die sorgfältig entwickelt wurde, um Ihr Haar zu pflegen und Z</p>
                    <button className="button2">Shop Now</button>
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
