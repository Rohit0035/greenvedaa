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
            <div className="about-us-img-wrap about-img-left" data-aos="zoom-in">
              <Image
                src="/img/common/ab-1.png"
                alt="GreenVedaa About"
                width={570}
                height={531}
                className="rounded-4 "
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-us-info-wrap" data-aos="zoom-in">
              <div className="section-title-area ltn__section-title-2 mb-1">
                <h6 className="section-subtitle  text-success fw-semibold mb-2 fs-5">
                  About GreenVedaa
                </h6>
                <h2 className="fw-bold fs-1 mb-1">
                  Conscious Living Through Nature’s Wisdom
                </h2>
              </div>
              <p className="text-muted w-100">
                <strong>GreenVedaa</strong> is a holistic lifestyle brand that aims to
                redefine purity and sustainability. We are committed to delivering
                high-quality, chemical-free health and lifestyle products that enrich
                everyday living. Our mission is to offer <strong>100% pure, organic,</strong>
                and <strong>environmentally friendly</strong> solutions that touch every aspect of
                human life — from food and beverages to clothing, accessories, and home care.
              </p>
              <p className="text-muted">
                <strong>Our Vision:</strong> To become the most trusted global brand for organic lifestyle
                solutions — expanding from Bihar to the world. GreenVedaa strives to build
                a sustainable supply chain, establish <strong>GreenVedaa Experience Centers</strong>,
                export to <strong>50+ countries</strong>, and pioneer the concept of “Pure Home, Pure Life.”
              </p>

              <p className="text-muted mb-0">
                <strong>Our Mission:</strong> To deliver holistic purity and sustainable living through
                everyday products while creating a conscious global community that values
                nature, health, and authenticity.
              </p>
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
