"use client";
import Image from "next/image";
const logoImage = "/img/common/logo-circle.png";
const logoImage2 = "/img/common/logo-circle.png";
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
          GreenVedaa is a holistic lifestyle brand that aims to redefine purity and sustainability.
        </p>
      </div>
    </div>
  );
};

export default FooterAbout2;
