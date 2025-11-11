import Adress from "@/components/sections/address/Adress";
import ContactPrimary from "@/components/sections/contacts/ContactPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Map2 from "@/components/shared/map/Map2";
import React from "react";

const ContactMain = () => {
  return (
    <main>
      {/* <HeroPrimary title={"Contact Us"} text="Contact" /> */}
      <CommonBreadcrumb title="Contact" label="Home"/>
      <Adress />
      <ContactPrimary />
      <Map2 />
    </main>
  );
};

export default ContactMain;
