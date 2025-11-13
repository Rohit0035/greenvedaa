"use client";
import Image from "next/image";
import React from "react";
import { FaLeaf, FaRecycle, FaHandHoldingHeart, FaSeedling } from "react-icons/fa";
import abtimg from "../../../../public/img/common/abt-img.jpeg";

const About5 = ({ pt }) => {
  const highlights = [
    {
      icon: <FaSeedling className="text-success fs-5 mb-0" />,
      title: "100% Organic Ingredients",
    },
    {
      icon: <FaHandHoldingHeart className="text-success fs-5 mb-0" />,
      title: "Empowering Farmers",
    },
    {
      icon: <FaRecycle className="text-success fs-5 mb-0" />,
      title: "Eco-Friendly Packaging",
    },
    {
      icon: <FaLeaf className="text-success fs-5 mb-0" />,
      title: "Holistic Living",
    },
  ];

  return (
    <div className={`ltn__about-us-area pb-5 ${pt ? pt : "pt-120"} pb-120`}>
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 align-self-center" data-aos="zoom-in">
            <div className="about-us-img-wrap mb-3">
              <Image
                src={abtimg}
                alt="About GreenVedaa"
                width={1000}
                className="rounded shadow-sm"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 align-self-center" data-aos="fade-up">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2 mb-3">
                <h6 className="section-subtitle text-success fw-semibold mb-2 fs-5">
                  About GreenVedaa
                </h6>
                <h2 className="fw-bold fs-1 mb-3">
                  Conscious Living Through Nature’s Wisdom
                </h2>
              </div>

              <p className="text-muted mb-3">
                <strong>GreenVedaa</strong> is a holistic lifestyle brand that aims to
                redefine purity and sustainability. We are committed to delivering
                high-quality, chemical-free health and lifestyle products that enrich
                everyday living. Our mission is to offer <strong>100% pure, organic,</strong>
                and <strong>environmentally friendly</strong> solutions that touch every aspect of
                human life — from food and beverages to clothing, accessories, and home care.
              </p>

              <p className="text-muted mb-3">
                <strong>Our Vision:</strong> To become the most trusted global brand for organic lifestyle
                solutions — expanding from Bihar to the world. GreenVedaa strives to build
                a sustainable supply chain, establish <strong>GreenVedaa Experience Centers</strong>,
                export to <strong>50+ countries</strong>, and pioneer the concept of “Pure Home, Pure Life.”
              </p>

              <p className="text-muted mb-4">
                <strong>Our Mission:</strong> To deliver holistic purity and sustainable living through
                everyday products while creating a conscious global community that values
                nature, health, and authenticity.
              </p>

              {/* Grid Highlights */}
              <div className="row text-start">
                {highlights.map((item, index) => (
                  <div className="col-6 col-md-6 mb-2" key={index} data-aos="zoom-in">
                    <div className="p-1 bg-light rounded shadow-sm h-100 hover-float mb-2">
                      <h6 className="fw-semibold mb-0 p-2"> <span className="me-2">{item.icon}</span>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        .hover-float {
          transition: all 0.4s ease;
        }
        .hover-float:hover {
          transform: translateY(-6px);
          box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About5;
