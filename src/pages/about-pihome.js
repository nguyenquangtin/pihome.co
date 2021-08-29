import React from "react"
import {
  ContentSectionOne,
  TeamSection,
  FooterSection,
} from "../sections/about";
import PageWrapper from '../components/PageWrapper'

const About = () => {
  return (
    <PageWrapper innerPageHeader={true} showLogin={false}>
      <ContentSectionOne />
      <TeamSection className="about-us-temam-area" />
      <FooterSection />
    </PageWrapper>
  );
}

export default About
