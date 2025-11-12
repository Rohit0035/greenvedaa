import AccountPrimary from "@/components/sections/account/AccountPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const AccountMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="My Account" label="Home"/>
      <AccountPrimary />
    </main>
  );
};

export default AccountMain;
