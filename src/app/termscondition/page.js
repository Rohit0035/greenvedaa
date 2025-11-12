import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import TermsMain from "@/components/sections/custom/TermsMain";

const TermsCondition = () => {
  return (
    <PageWrapper
      isNotHeaderTop={true}
      isHeaderRight={true}
      isTextWhite={true}
      isNavbarAppointmentBtn={false}
    >

     <CommonBreadcrumb title="Terms & Conditions" label="Home"/>
    <TermsMain/>
    </PageWrapper>
  );
};

export default TermsCondition;
