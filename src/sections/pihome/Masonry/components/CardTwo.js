import React from "react"
import { Link } from "gatsby"

export default function Card({ image, titleSmall, title }) {
  return (
    <>
        <div className="portfolio-card portfolio-card-masonry">
              <Link to="/" className="card-image d-block">
            <img src={image} alt="portfolio" className="w-100" alt={title} />
            </Link>
            <div className="text-start  text-block  gr-bg-opacity d-block ">
            <span className=" d-block ponter-event-none">{titleSmall}</span>
            <h3>{title}</h3>
            </div>
        </div>
    </>
  )
}
