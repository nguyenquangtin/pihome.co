import React from "react";
import {Link} from "gatsby";
const PricingSection = ({ ...rest }) => {
  return (
    <>
      {/* Pricing Area  */}
<div className="pricing-area-l3-1 bg-catskillwhite">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-11" data-aos="fade-in" data-aos-duration={800} data-aos-once="true">
        <div className="section__heading text-center">
          <div className="icon-area">
            <i className="fas fa-dollar-sign" />
          </div>
          <h2>Bảng giá bán lẻ</h2>
          <p>Giá cho một cái bánh, đơn vị tính: ngàn đồng</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center pricing-l3-1-items table-responsive">
      <table className="table table-bordered table-hover table-condensed table-striped" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
<thead>
<tr>
<th title="Field #1">&nbsp;</th>
<th title="Field #2" colSpan="3" align="center" className="text-center">Bánh nhỏ 55g</th>
<th title="Field #5" colSpan="2" align="center" className="text-center">Bánh trung 80g</th>
<th title="Field #7" colSpan="3"align="center" className="text-center">Bánh lớn 155g</th>
</tr>

  <tr>
<th title="Field #1">Loại nhân</th>
<th title="Field #2">Bánh dẻo</th>
<th title="Field #3">Nướng TT</th>
<th title="Field #4">Hiện đại</th>

<th title="Field #5">Bánh dẻo</th>
<th title="Field #6">Nướng TT</th>

<th title="Field #7">Bánh dẻo</th>
<th title="Field #8">Nướng TT</th>
<th title="Field #9">Hiện đại</th>
</tr></thead>
<tbody><tr>
<td>Đậu xanh</td>
<td align="right">18</td>
<td align="right">22</td>
<td align="right">25</td>
<td align="right">25</td>
<td align="right">30</td>
<td align="right">48</td>
<td align="right">58</td>
<td align="right">90</td>
</tr>
<tr>
<td>Hạt sen</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Trà xanh</td>
<td align="right">18</td>
<td align="right">22</td>
<td align="right">25</td>
<td align="right">25</td>
<td align="right">30</td>
<td align="right">48</td>
<td align="right">58</td>
<td align="right">90</td>
</tr>
<tr>
<td>Sữa dừa</td>
<td align="right">18</td>
<td align="right">22</td>
<td align="right">25</td>
<td align="right">25</td>
<td align="right">30</td>
<td align="right">48</td>
<td align="right">58</td>
<td align="right">90</td>
</tr>
<tr>
<td>Khoai môn</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Sầu riêng</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Cốm dừa</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Chocolate mint</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Dâu tây</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Quế hoa hạt chia</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Táo đỏ Tân Cương</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Lychee (Lệ Chi)</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Hoa quả nhiệt đới</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Trà gừng long nhãn</td>
<td align="right">20</td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right">28</td>
<td align="right">32</td>
<td align="right">50</td>
<td align="right">60</td>
<td align="right">95</td>
</tr>
<tr>
<td>Thập cẩm xá xíu</td>
<td align="right"></td>
<td align="right">27</td>
<td align="right">30</td>
<td align="right"></td>
<td align="right">35</td>
<td align="right"></td>
<td align="right">70</td>
<td align="right">100</td>
</tr>
<tr>
<td>TC gà quay lạp khô</td>
<td align="right"></td>
<td align="right">27</td>
<td align="right">30</td>
<td align="right"></td>
<td align="right">35</td>
<td align="right"></td>
<td align="right">70</td>
<td align="right">100</td>
</tr>
<tr>
<td>Thập cẩm chay </td>
<td align="right"></td>
<td align="right">25</td>
<td align="right">28</td>
<td align="right"></td>
<td align="right">32</td>
<td align="right"></td>
<td align="right">65</td>
<td align="right">95</td>
</tr>
</tbody></table>
    </div>
  </div>
</div>

    </>
  )
}

export default PricingSection
