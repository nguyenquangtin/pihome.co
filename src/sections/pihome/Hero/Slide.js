import React from "react"

const TestimonialSlide = ({image,text,user}) => {
  return (
    <div className="single-item focus-reset text-center" style={{backgroundImage: `url(${image})`}}>
      <div className="slider-content">
      </div>
    </div>
  )
}

export default TestimonialSlide;