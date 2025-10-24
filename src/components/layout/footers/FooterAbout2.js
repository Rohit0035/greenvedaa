"use client";
import Image from "next/image";
const logoImage = "/img/common/veda-logo.png";
const logoImage2 = "/img/common/veda-logo.png";
import Link from "next/link";
import { useFooterContex } from "@/providers/FooterContext";

const FooterAbout2 = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
      <div className="footer-widget footer-about-widget">
        <div className="footer-logo mb-10">
          <div className="site-logo">
            <Image
              src={footerBg === "dark" ? logoImage2 : logoImage}
              alt="Logo" width={90} height={42}
            />
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the and typesetting industry.
          Lorem Ipsum is dummy text of the printing.
        </p>
       
      </div>
    </div>
  );
};

export default FooterAbout2;
