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
              className="col-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-box-l3-1">
                <div className="section__heading">
                  <i className="fas fa-images" />
                  <h2>Bộ sưu tập hình ảnh 2021</h2>
                </div>
                <p>
                  <i className="fas fa-check" /> Có giá ưu đãi riêng cho số lượng lớn. <br />
                  <i className="fas fa-check" /> Đặt hàng và chuyển cọc 30% trước ngày 27/8 sẽ được thêm chiết khấu<br />
                  <i className="fas fa-check" /> Nếu không vì lý do dịch bệnh hay bất khả kháng mà rút cọc thì sẽ quy đổi về nguyên vật liệu làm bánh nhé 😅<br />
                  <i className="fas fa-check" /> Cộng thêm 10% tổng giá trị đơn bánh nếu lấy hóa đơn GTGT<br />
                  </p>
                <Link to="/" className="btn  btn--link focus-reset focus-reset">
                  Xem toàn bộ các loại bánh
                </Link>
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10 order-lg-1 order-0"
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
