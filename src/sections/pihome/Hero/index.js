
import React,{useRef} from "react"
import Link from '../../../components/Link'
import Slider from "react-slick"
import Slide from "./Slide"
import {TestimonialData} from "./data"
import backgroundImage from "../../../assets/image/landing-3/hero-bg.png";
import shape from "../../../assets/image/landing-3/hero-circle.png";
import imageOne from "../../../assets/image/landing-3/hero-img-1.png";
import imageTwo from "../../../assets/image/landing-3/hero-img-2.png";

import partImage1 from "../../../assets/image/landing-9/testimonial-1.png"
import partImage2 from "../../../assets/image/landing-9/testimonial-2.png"
import partImage3 from "../../../assets/image/landing-9/testimonial-3.png"
import partImage4 from "../../../assets/image/landing-9/testimonial-4.png"
import partImage5 from "../../../assets/image/landing-9/testimonial-5.png"


const HeroSection = ({...rest}) => {
  const elSlider = useRef();

  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    swipe: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }

    ]
  }
  return (
    <>
      {/* Hero Area */}
<div className="hero-area-l3">
  <div className="container">
    <div className="row justify-content-center align-items-center">
    <div className="testimonial-area-l9-1">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="testimonial-area-l9-1--content bg-position" >
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="slider-l9-main">
                      <div className="l9-slider-arrow-2">
                      <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickNext()} className="btn-reset px-0"><i className="prev9-1 fas fa-angle-left slick-arrow" /></button>
                <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickNext()} className="btn-reset px-0"><i className="next9-1 fas fa-angle-right slick-arrow" /></button>
                      </div>
                      <Slider
                        ref={elSlider}
                        {...slickSettings}
                        className="testimonial-slider-l9-1"
                      >
                        {TestimonialData.map((item, index) => (
                            <Slide image={item.image} text={item.text} user={item.user} key={index}/>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>


  )
}


export default HeroSection;
