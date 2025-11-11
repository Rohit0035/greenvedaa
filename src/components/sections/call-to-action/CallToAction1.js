import React from "react";

const CallToAction1 = () => {
  return (
    <div
      className="ltn__newsletter-area section-bg-1 bg-overlay-black-90 py-5 bg-image" 
      data-bs-bg="/img/bg/2.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="ltn__newsletter-inner text-center" data-aos="zoom-in">
              <h1 className="white-color">Stay Connected with GreenVedaa</h1>
              <p className="white-color">
                Join our GreenVedaa family and get exclusive updates on herbal wellness,
                skincare tips, new product launches, and special member-only offers.
              </p>
              <form action="#" className="ltn__form-box">
                <input type="email" name="email" placeholder="Email*" />
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction1;
