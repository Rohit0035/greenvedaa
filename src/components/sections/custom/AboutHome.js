"use client";
import Image from "next/image";
import React from "react";

const AboutHome = ({ pt }) => {
  return (
    <div className={`ltn__about-us-area py-5 ${pt ? pt : ""} `}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-us-img-wrap about-img-left">
              <Image
                src="/img/others/6.png"
                alt="GreenVedaa About"
                width={570}
                height={531}
                className="rounded-4 shadow-sm"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2 mb-4">
                <h6 className="section-subtitle ltn__secondary-color text-success fw-semibold">
                  About GreenVedaa
                </h6>
                <h2 className="fw-bold fs-1">
                  Conscious Living Through
                  Nature’s Wisdom
                </h2>
                <p className="text-muted">
                  At <strong>GreenVedaa</strong>, we believe in the harmony
                  between wellness and the planet. Every product we craft is
                  inspired by ancient Ayurvedic principles, powered by
                  sustainable innovation, and sourced from trusted organic farms
                  across India.
                </p>
              </div>

              <p className="text-muted">
                Our journey began with a single purpose — to offer authentic,
                traceable, and ethical products that nurture both your body and
                the Earth. From farm to shelf, transparency guides every step.
                We ensure zero waste packaging, fair trade practices, and
                mindful choices that honor nature.
              </p>

              <div className="about-author-info d-flex align-items-center mt-4">
                <div className="author-name-designation me-3">
                  <h5 className="mb-0 fw-bold">Lorem Ipsum</h5>
                  <small className="text-muted">/ Founder, GreenVedaa</small>
                </div>
                {/* <div className="author-sign">
                  <Image
                    src="/img/icons/icon-img/author-sign.png"
                    alt="Signature"
                    width={100}
                    height={40}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Styling */}
      <style jsx>{`
        .about-us-img-wrap img {
          object-fit: cover;
        }
        .section-title {
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default AboutHome;
