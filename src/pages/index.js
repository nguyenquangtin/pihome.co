import React from "react"
import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  CtaSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  PricingSection,
  FooterSection
} from "../sections/pihome"
import PageWrapper from '../components/PageWrapper';

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header-2",
  containerFluid:true
}

const PiHome = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      {/* <ContentSectionTwo />
      <ContentSectionThree /> */}
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default PiHome
