import React from "react"
import Card from './components/FeatureCard'

import set1 from "../../../assets/image/set/6.jpg";
import set2 from "../../../assets/image/set/7.jpg";
import set3 from "../../../assets/image/set/8.jpg";
import set4 from "../../../assets/image/set/9.jpg";
import set5 from "../../../assets/image/set/10.jpg";
import set6 from "../../../assets/image/set/11.jpg";

const data = [
  {
    icon: set1,
    title: "TRĂNG VÀNG",
    cardClass:"card--feature-l9--1",
    text: "Hộp 6 bánh nhỏ 55g (170 - 200k) <br /> Hộp 6 bánh trung 80g (200 - 220k)<br /> Set hộp không: 35.000"
  },
  {
    icon: set2,
    title: "HOÀNG KIM",
    cardClass:"card--feature-l9--3",
    text: "Hộp 6 bánh trung 80g (250 - 280k)<br />Set hộp không: 75.000"
  },
  {
    icon: set6,
    title: "THU MỘC",
    cardClass:"card--feature-l9--2",
    text: "Bánh tùy chọn<br />Giỏ mây: 20k"
  },
  {
    icon: set3,
    title: "KỲ LÂN CHIÊU TÀI",
    cardClass:"card--feature-l9--2",
    text: "Hộp 4 bánh lớn 150g (280 - 320k)<br />Set hộp không: 45.000"
  },
  {
    icon: set5,
    title: "TRĂNG KỂ CHUYỆN",
    cardClass:"card--feature-l9--1",
    text: "Hộp 4 bánh lớn 150g (310 - 450k)<br />Set hộp không: 75.000"
  },
  {
    icon: set4,
    title: "HẰNG NGA",
    cardClass:"card--feature-l9--3",
    text: "Hộp 4 bánh lớn 150g ( 270 - 300k)<br />Set hộp không: 37.000)"
  },
]
const FeatureSection = ({ ...rest }) => {
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
                <h2>Trăng kể chuyện</h2>
                <p>
                Celebrate the traditions and delights of the Mid-Autumn festival with our legendary PiHome Mooncakes. Intricately handcrafted favourites and heart-warming traditional mooncakes meticulously handcrafted by our PiHome master chefs to bring prosperity, peace and harmony to you and your loved ones.

                Reserve your Mooncakes online from now till 15 September 2021.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center feature-l9-items">
          {data.map((item,key)=>{return(
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
              key={key}
            >

                <Card iconImage={item.icon} title={item.title} text={item.text} cardClass={item.cardClass}/>
            </div>
              )})}
          </div>
          <div className="row justify-content-center feature-l9-items">
            <h5 className="text-center">
            (Giá set hộp bánh thay đổi tùy vào sự lựa chọn của bạn)
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
