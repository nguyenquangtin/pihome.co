import React from "react"
import imageOne from "../../../../assets/image/about/about-img-1.jpg"
import imageTwo from "../../../../assets/image/about/about-img-2.jpg"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* About us content-1 */}
      <div className="about-content-1 mt-3">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-left">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-right">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
          </div>
          <div className="row about-content-1-bottom">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>
                  Đôi lời về Nhà Pi <br />
                  Pi Home
                </h2>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-content">
                <p>
                  Nhà Pi là tâm huyết của các thành viên trong trong team.
                  Mong muốn lớn nhất là đem tới mọi người các lọai bánh ngon vừa ngon miệng và đã mắt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSectionOne
