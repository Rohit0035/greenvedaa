"use client";
import ForgotPasswordModal from "@/components/shared/modals/ForgotPasswordModal";
import Link from "next/link";
import React, { useState } from "react";

const LoginPrimary = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <>
      <div className="ltn__login-area pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center mb-0">
                <h1 className="section-title">Sign In to GreenVedaa</h1>
                <p>
                  Welcome back! Log in to explore our range of herbal and
                  Ayurvedic products crafted with natural ingredients.
                  Manage your orders, track deliveries, and enjoy personalized
                  offers.
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="zoom-in">
            {/* Login Section */}
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form className="ltn__form-box contact-form-box">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address*"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password*"
                  />
                  <div className="btn-wrapper mt-0">
                    <button
                      className="theme-btn-1 btn btn-block w-100"
                      type="submit"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-3">
                    <Link
                      href="#"
                      onClick={toggleModal}
                    >
                      <small>Forgot your password?</small>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Create Account Section */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="account-create text-center w-100">
                <h4>New to GreenVedaa?</h4>
                <p>
                  Create your free account today to unlock exclusive member
                  benefits, get early access to wellness tips and shop
                  your favorite GreenVedaa natural products effortlessly.
                </p>
                <div className="btn-wrapper mt-3">
                  <Link href="/register" className="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Forgot Password Modal --- */}
      <ForgotPasswordModal isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
};

export default LoginPrimary;
