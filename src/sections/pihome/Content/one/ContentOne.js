import React from "react"
import { Link } from "gatsby"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l3-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-12 col-xl-12 col-lg-6 col-md-12 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-box-l3-1">
                <i className="fas fa-users" />
                <div className="section__heading">
                  <h2>BẢNG GIÁ BÁN LẺ</h2>
                  <p>
                  Giá cho một cái bánh, đơn vị tính: ngàn đồng
                  </p>
                </div>
                <Link to="/" className="btn  btn--link focus-reset focus-reset">
                  Learn more
                </Link>
              </div>
            </div>
            <div
              className="offset-xxl-2 col-xl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10 order-lg-1 order-0"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
