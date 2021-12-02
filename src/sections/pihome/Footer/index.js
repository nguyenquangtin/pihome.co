import React from "react";
import { Link } from "gatsby";

export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <div>
        <footer className="footer-area-l3" id="contact">
          <div className="container">
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Thông tin</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about-pihome">Về Nhà Pi</Link>
                    </li>
                    <li>
                      <Link to="/">Bảng giá</Link>
                    </li>
                    <li>
                      <Link to="/">Liên hệ</Link>
                    </li>
                    <li>
                      <Link to="/">Điều khoản</Link>
                    </li>
                    <li>
                      <Link to="/">Bảo mật</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Các loại bánh </h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Bánh Cookies</Link>
                    </li>
                    <li>
                      <Link to="/">Bánh Trung Thu</Link>
                    </li>
                    <li>
                      <Link to="/">Bánh kem</Link>
                    </li>
                    <li>
                      <Link to="/">Bánh hiện đại</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Dịch vụ </h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Tiệc trà</Link>
                    </li>
                    <li>
                      <Link to="/">Workshop cho Trường học</Link>
                    </li>
                    <li>
                      <Link to="/">Workshop Dành cho Công ty</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area-list-item get-in-touch-area">
                  <h4>Liên hệ</h4>
                  <p>
                    Vui lòng liên hệ với chúng tôi nếu cần bất kỳ sự giúp đỡ
                    nào.
                  </p>
                  <h3>
                    <a href="mailto:selina.chautruong@gmail.com">
                      selina.chautruong@gmail.com
                    </a>
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.facebook.com/pisceshome"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/nhapi.cake"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right-area-l3 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-3-border" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="copy-right-text">
                  <p className="text-lynch mb-0">
                    Bản quyền &copy;2021, PiHome.Co. Tất cả các quyền được bảo
                    lưu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
