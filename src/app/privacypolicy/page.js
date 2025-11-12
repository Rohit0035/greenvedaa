import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";
import PolicyMain from "../../components/sections/custom/PolicyMain";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";

const PrivacyPolicy = () => {
  return (
    <PageWrapper
      isNotHeaderTop={true}
      isHeaderRight={true}
      isTextWhite={true}
      isNavbarAppointmentBtn={false}
    >

     <CommonBreadcrumb title="Privacy Policy" label="Home"/>
    <PolicyMain/>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
