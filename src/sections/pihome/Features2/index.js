import React from "react";
import Card from "./components/FeatureCard";

import set1 from "../../../assets/image/services/2.jpg";
import set2 from "../../../assets/image/services/3.jpg";
import set3 from "../../../assets/image/services/4.jpg";
import set4 from "../../../assets/image/services/5.jpg";


const data = [
  {
    icon: set1,
    title: "Bánh hình thú",
    cardClass: "card--feature-l9--1",
    text: `
Mỗi bánh nặng khoảng 60g <br />
Vỏ bánh làm từ mật ong<br />
Pha màu tự nhiên<br />
Có 7 mẫu con vật (cún, rồng con, heo, khỉ, cú, hổ, thỏ)<br />
Chỉ nhận giao trước ngày 07/9 (07/8 ÂL)<br />
Giá bánh: 50k/con<br />
`,
  },
  {
    icon: set2,
    title: "Bánh hình logo, thương hiệu",
    cardClass: "card--feature-l9--1",
    text: `
    Đặt trên 50 hộp miễn phí làm khuôn <br />
    Phí làm khuôn từ 300-500k một mẫu khuôn<br />
    Chỉ hỗ trợ làm khuôn/bánh hình logo đến hết ngày 31/8<br />
`,
  },
  {
    icon: set3,
    title: "Bánh hiện đại",
    cardClass: "card--feature-l9--1",
    text: `
    Có rất nhiều mẫu mã đa dạng nhưng đều rất đẹp, quý khách vui lòng không nên yêu cầu từng mẫu phải giống 100% nhé <br />`,
  },
  {
    icon: set4,
    title: "Set hộp bánh quà tặng",
    cardClass: "card--feature-l9--1",
    text: `Nếu để nhà Pi tự kết hợp thì sẽ có giá tốt hơn, bánh đẹp hơn mà giá ổn hơn nữa.<br />`,
  },

];
const FeatureSection2 = ({ ...rest }) => {
  return (
    <>
      {/* Feature Area */}
      <div className="feature-area-l3-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-9 col-md-11"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <i className="fas fa-gifts" />
                <h2>Các loại dịch vụ</h2>
                <p>
                  * Có giá ưu đãi riêng cho số lượng lớn. <br />
                  * Đặt hàng và chuyển cọc 30% trước ngày 27/8 sẽ được thêm chiết khấu<br />
                  * Nếu không vì lý do dịch bệnh hay bất khả kháng mà rút cọc thì sẽ quy đổi về nguyên vật liệu làm bánh nhé 😅<br />
                  * Cộng thêm 10% tổng giá trị đơn bánh nếu lấy hóa đơn GTGT<br />
              </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            {data.map((item, key) => {
              return (
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={key}
                >
                  <Card
                    iconImage={item.icon}
                    title={item.title}
                    text={item.text}
                    cardClass={item.cardClass}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default FeatureSection2;
