import React from "react"
import { Link } from "gatsby"
export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>
                Đôi lời về Nhà Pi <br />
                <q>Pi Home</q>
              </h2>
              <p>
                Nhà Pi là tâm huyết của các thành viên trong trong team.
                Mong muốn lớn nhất là đem tới mọi người các lọai bánh ngon và ngọt cả về "mắt" và "miệng".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
