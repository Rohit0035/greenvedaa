import Link from "next/link";
import React from "react";

const FooterCustomerCare = () => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
      <div className="footer-widget footer-menu-widget clearfix">
        <h4 className="footer-title">Shop</h4>
        <div className="footer-menu">
          <ul>
            <li>
              <Link href="/">Snacks</Link>
            </li>
            <li>
              <Link href="/">Wellness</Link>
            </li>
            <li>
              <Link href="/">Powders</Link>
            </li>
            <li>
              <Link href="/">Ritual Kits</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterCustomerCare;
