import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import RegisterPrimary from "@/components/sections/register/RegisterPrimary";
import React from "react";

const RegisterMain = () => {
  return (
    <main>
       <CommonBreadcrumb title="Sign Up" label="Home"/>
      <RegisterPrimary />
    </main>
  );
};

export default RegisterMain;
