"use client";
import React, { useState } from "react";

export default function GreenVedaaManifesto() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      icon: "fas fa-seedling",
      title: "Organic & Traceable",
      desc: "We ensure every ingredient is organically grown and completely traceable back to its natural source.",
      bg: "bg-success-subtle bg-opacity-75 border border-success-subtle",
    },
    {
      icon: "fas fa-recycle",
      title: "Zero Waste",
      desc: "Our production process minimizes waste and promotes sustainable packaging for a cleaner planet.",
      bg: "bg-warning-subtle bg-opacity-75 border border-warning-subtle",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Ethical Sourcing",
      desc: "We work directly with ethical farms and producers, ensuring fair trade and respect for nature.",
      bg: "bg-info-subtle bg-opacity-75 border border-info-subtle",
    },
    {
      icon: "fas fa-leaf",
      title: "Holistic Living",
      desc: "We promote harmony between mind, body, and environment through pure and natural products.",
      bg: "bg-primary-subtle bg-opacity-75 border border-primary-subtle",
    },
  ];

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-5 bg-light position-relative overflow-hidden"
      data-aos="zoom-in"
    >
      <div className="container text-center">
        <div className="section-title-area text-center mb-5">
          <h1 className="section-title fw-bold">
            The GreenVedaa Manifesto
          </h1>
        </div>

        <div className="row justify-content-center gy-4">
          {items.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div
                className={`p-4 rounded-4 shadow-sm position-relative hover-float h-100 ${item.bg}`}
              >
                <div className="icon mb-3">
                  <i className={`${item.icon} text-success fs-1`}></i>
                </div>

                <h6
                  className="fw-bold mb-2 text-dark fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDescription(index)}
                >
                  {item.title}
                </h6>

                <div className={`collapse ${openIndex === index ? "show" : ""}`}>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating + hover animation */}
      <style jsx>{`
        .hover-float {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-float:hover {
          transform: translateY(-8px);
          box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.1);
        }
        .icon {
          animation: floatIcon 3s ease-in-out infinite;
        }
        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
