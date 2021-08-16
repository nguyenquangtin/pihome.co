
import React,{useRef} from "react"
// import Link from '../../../components/Link'
import Slider from "react-slick"
import Slide from "./Slide"
import {TestimonialData} from "./data"
import "../../../../node_modules/slick-carousel/slick/slick.css";

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
    dots: true,
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
<div className="hero-banner-wrap">
  <div className="row">
      <div className="container-fluid">
        <div className="hero-banner"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true">
          <div className="col-xl-12">
            <Slider
              ref={elSlider}
              {...slickSettings}
              className=""
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
    </>

  )
}


export default HeroSection;
