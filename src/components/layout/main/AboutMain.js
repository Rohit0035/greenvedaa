import About5 from "@/components/sections/about/About5";
import CallToAction1 from "@/components/sections/call-to-action/CallToAction1";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import WhyUs from "@/components/sections/custom/WhyUs";
import Faq2 from "@/components/sections/faq/Faq2";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";

const AboutMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="About" label="Home"/>
      <About5 pt={"pt-0"} />
      <WhyUs/>
      <Testimonials3 pt="pt-115" />
      <Faq2 />
      <CallToAction1 />
    </main>
  );
};

export default AboutMain;
