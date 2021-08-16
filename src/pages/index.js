import React from "react"
// import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  FeatureSection2,
  CtaSection,
  PricingSection,
  FooterSection
} from "../sections/pihome"
import PageWrapper from '../components/PageWrapper';
import BannerSection from "../sections/pihome/Masonry/Banner"
import MasonryBody  from "../sections/pihome/Masonry/ColFour"

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header-2",
  containerFluid:true
}

const PiHome = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <HeroSection />
      <FeatureSection />
      <FeatureSection2 />
      <PricingSection />
      <BannerSection
        title="Bộ sưu tập hình ảnh 2021"
        text={"Một phần các loại bánh Trung thu của \"Nhà Pi\"."}
      />
      <MasonryBody/>
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default PiHome
