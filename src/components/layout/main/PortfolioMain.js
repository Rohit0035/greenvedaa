import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import HeroCertificationSection from "@/components/sections/custom/HeroCertification";
import PortfolioPrimary from "@/components/sections/portfolio/PortfolioPrimary";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import React from "react";

const PortfolioMain = ({ type }) => {
  return (
    <main>
      <CommonBreadcrumb title="Certification" label="Home" />
      <HeroCertificationSection />
      <PortfolioPrimary type={type} />
      <CallToAction2 />
      <Testimonials3/>
    </main>
  );
};

export default PortfolioMain;
