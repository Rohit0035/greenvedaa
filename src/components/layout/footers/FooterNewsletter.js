import Image from "next/image";
import Link from "next/link";

const FooterNewsletter = () => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12 col-12">
      <div className="footer-widget footer-newsletter-widget">
        <h4 className="footer-title">Contact Us</h4>
        <div className="footer-newsletter">
          <div className="footer-address">
            <ul>
              <li>
                <div className="footer-address-icon">
                  <i className="icon-placeholder"></i>
                </div>
                <div className="footer-address-info">
                  <p>Lorem Ipsum</p>
                </div>
              </li>
              <li>
                <div className="footer-address-icon">
                  <i className="icon-call"></i>
                </div>
                <div className="footer-address-info">
                  <p>
                    <Link href="tel:+0123-456789">+0123-456789</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="footer-address-icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="footer-address-info">
                  <p>
                    <Link href="mailto:example@example.com">
                      info@gmail.com
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media mt-20">
            <ul>
              <li>
                <Link href="https://www.facebook.com" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>{" "}
              <li>
                <Link href="https://x.com" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>{" "}
              <li>
                <Link href="https://www.linkedin.com" title="Linkedin">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>{" "}
              <li>
                <Link href="https://www.youtube.com" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;
