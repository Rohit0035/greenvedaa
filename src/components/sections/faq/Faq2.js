"use client";
import Link from "next/link";
import React from "react";

const Faq2 = () => {
  return (
    <div className="ltn__faq-area py-5" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h1 className="section-title">Frequently Asked Questions</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 offset-2">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div id="accordion_2">

                {/* Q1 */}
                <div className="card mb-3">
                  <button
                    className="btn w-100 text-start collapsed fw-semibold fs-6 ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-1"
                    aria-expanded="false"
                  >
                    How can I buy GreenVedaa products?
                  </button>
                  <div
                    id="faq-item-2-1"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        You can easily purchase GreenVedaa’s natural and herbal products
                        directly from our official website or through leading e-commerce platforms.
                        Simply browse the collection, add your desired items to the cart, and
                        complete your order securely online. We offer doorstep delivery across India.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Q2 */}
                <div className="card mb-3">
                  <button
                    className="btn w-100 text-start fw-semibold fs-6 ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-2"
                    aria-expanded="true"
                  >
                    How do I request a refund or replacement?
                  </button>
                  <div
                    id="faq-item-2-2"
                    className="collapse show"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <div className="ltn__video-img alignleft mb-2">
                        <Link
                          className="ltn__video-icon-2 ltn__video-icon-2-small"
                          href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play"></i>
                        </Link>
                      </div>
                      <p>
                        If your product arrives damaged or incorrect, you can easily raise
                        a return or refund request within 7 days of delivery through your
                        order history page or by contacting our customer support team.
                        We ensure a smooth and transparent refund process.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Q3 */}
                <div className="card mb-3">
                  <button
                    className="btn w-100 text-start collapsed fw-semibold fs-6 ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-3"
                    aria-expanded="false"
                  >
                    I’m new to GreenVedaa. Where should I start?
                  </button>
                  <div
                    id="faq-item-2-3"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Welcome to GreenVedaa! Start by exploring our best-selling categories —
                        herbal skincare, organic haircare, and wellness products. Each product page
                        provides detailed usage instructions, key ingredients, and benefits to help
                        you make an informed choice. You can also take our product recommendation quiz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Q4 */}
                <div className="card mb-3">
                  <button
                    className="btn w-100 text-start collapsed fw-semibold fs-6 ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-4"
                    aria-expanded="false"
                  >
                    What is GreenVedaa’s return and refund policy?
                  </button>
                  <div
                    id="faq-item-2-4"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        GreenVedaa offers a hassle-free return and refund policy. If the product
                        you received is damaged, defective, or not as described, you can request
                        a return within 7 days. Refunds are processed within 3–5 working days after
                        inspection of the returned item. Please ensure products are unused and sealed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Q5 */}
                <div className="card mb-3">
                  <button
                    className="btn w-100 text-start collapsed fw-semibold fs-6 ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-5"
                    aria-expanded="false"
                  >
                    Are my personal details and payments secure?
                  </button>
                  <div
                    id="faq-item-2-5"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Absolutely. GreenVedaa uses end-to-end SSL encryption and
                        trusted payment gateways to keep your personal and payment
                        details safe. We never store your card information and comply
                        with all data protection and privacy laws to ensure a secure
                        shopping experience every time you visit our site.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small custom style */}
      <style jsx>{`
        .card button {
          background: none;
          border: none;
          color: #2e2e2e;
          text-decoration: none;
          width: 100%;
          text-align: left;
        }
        .card button:hover {
          color: #8cc63f;
        }
        .card-body {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Faq2;
