"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
  FaCertificate,
  FaFlask,
} from "react-icons/fa";
import herocerimg from "../../../../public/img/common/cer-hero-img.png"
import Image from "next/image";

const HeroCertificationSection = () => {
  const certList = [
    {
      icon: <FaLeaf size={24} color="#2d6a4f" />,
      title: "100% Natural Ingredients",
    },
    {
      icon: <FaCertificate size={24} color="#2d6a4f" />,
      title: "AYUSH Ministry Certified",
    },
    {
      icon: <FaFlask size={24} color="#2d6a4f" />,
      title: "3rd Party Lab Tested",
    },
    {
      icon: <FaShieldAlt size={24} color="#2d6a4f" />,
      title: "FSSAI Approved Facility",
    },
    {
      icon: <FaCheckCircle size={24} color="#2d6a4f" />,
      title: "Toxin-Free & Preservative-Free",
    },
  ];

  return (
    <section className="pb-5">
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg="6" md="12" data-aos="zoom-in">
            <h1 className="fw-bold" style={{ color: "#1b4332", lineHeight: "1.3" }}>
              Pure. Certified. Trusted.<br />The GreenVedda Standard.
            </h1>

            <p style={{ color: "#444", marginTop: "15px" }}>
              At GreenVedda, every product is crafted with authenticity and purity.
              From farm sourcing to final packaging, we follow strict Ayurvedic,
              scientific, and safety guidelines — ensuring that you get nothing
              but the safest and most effective herbal wellness solutions.
            </p>

            <div className="mt-4">
              {certList.map((item, idx) => (
                <div key={idx} className="d-flex align-items-center mb-2">
                  {item.icon}
                  <span className="ms-2" style={{ color: "#222", fontWeight: "600" }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg="6" md="12" className="text-center mt-4 mt-lg-0" data-aos="zoom-in">
            <Image
              src={herocerimg}
              alt="GreenVedda Certification"
             className="w-75"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroCertificationSection;
