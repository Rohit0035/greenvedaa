"use client";
import Image from "next/image";
const logoImage1 = "/img/common/veda-logo.png";
// const logoImage2 = "/img/logo-2.png";

import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const Logo = ({ sticky }) => {
  const {
    headerStyle,
    headerSize,
    isNotHeaderTop,
    navBg,
    isHeaderSupport,
    isTextWhite
  } = useHeaderContex();

  return (
    <div className={sticky ? "sticky-logo" : "col-6"}>
      <div
        className={`${!isHeaderSupport &&
        (headerStyle === 3 || headerStyle === 5)
          ? ""
          : "site-logo-wrap"}`}
        style={{ height: "100%" }}
      >
        <div className="site-logo">
          <Link href="/">
            <Image
              src={
                navBg === "secondary" && sticky
                  ? logoImage1
                  : headerStyle === 2 || isTextWhite ? logoImage1 : logoImage1
              }
              alt="Logo"
              width={80}
              height={42}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
