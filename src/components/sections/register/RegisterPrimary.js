import Link from "next/link";
import React from "react";

const RegisterPrimary = () => {
  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center mb-2">
              <h1 className="section-title">Create Your GreenVedaa Account</h1>
              <p>
                Join the GreenVedaa community and enjoy exclusive access to natural wellness,
                herbal beauty, and sustainable living products.
                Sign up now to begin your holistic wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Form and Info */}
        <div className="row" data-aos="zoom-in">
          {/* Left - Form */}
          <div className="col-lg-6">
            <div className="account-login-inner">
              <form action="#" className="ltn__form-box contact-form-box">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="firstname" placeholder="First Name*" className="mb-2" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="lastname" placeholder="Last Name*" className="mb-2" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" placeholder="Email*" className="mb-2" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="phone" placeholder="Phone*" className="mb-2" />
                  </div>
                  <div className="col-md-6">
                    <input type="password" name="password" placeholder="Password*" />
                  </div>
                  <div className="col-md-6">
                    <input type="password" name="confirmpassword" placeholder="Confirm Password*" />
                  </div>
                </div>

                {/* Agreement */}
                <label className="checkbox-inline mt-3 d-block">
                  <input type="checkbox" /> I agree to receive updates, offers, and wellness
                  tips from <strong>GreenVedaa</strong> as described in the Privacy Policy.
                </label>
                <label className="checkbox-inline d-block">
                  <input type="checkbox" /> By clicking <strong>Create Account</strong>, I accept
                  GreenVedaa’s Terms & Conditions.
                </label>

                {/* Button */}
                <div className="btn-wrapper mt-3">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block w-100"
                    type="submit"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right - Info */}
          <div className="col-lg-6">
            <div className="h-100 account-login-inner pt-5 d-flex flex-column align-items-center justify-content-center text-center">
              <div className="by-agree">
                <p className="mb-2">
                  By creating an account, you acknowledge and agree to GreenVedaa’s commitment to
                  sustainability and ethical wellness practices.
                </p>
                <p className="mb-4">
                  <Link
                    href="/privacypolicy"
                    className="text-decoration-none fw-semibold text-success me-2"
                  >
                     PRIVACY POLICY
                  </Link>
                   
                   <Link
                    href="/termscondition"
                    className="text-decoration-none fw-semibold text-success"
                  >
                    TERMS & CONDITIONS
                  </Link>
                </p>
                <div className="go-to-btn mt-4">
                  <Link href="/login" className="fw-semibold text-dark">
                    ALREADY HAVE AN ACCOUNT?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPrimary;
