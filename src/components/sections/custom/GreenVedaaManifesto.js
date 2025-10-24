"use client";
import React from "react";
export default function GreenVedaaManifesto() {
    return (
        <section className="py-5 bg-light position-relative overflow-hidden">
            <div className="container text-center">
                <div className="section-title-area  ltn__section-title-2 text-center">
                    <h1 className="section-title">
                        The GreenVedaa Manifesto
                    </h1>
                </div>
                <div className="row justify-content-center gy-4">

                    {/* 1. Organic & Traceable */}
                    <div className="col-6 col-md-3">
                        <div className="p-4 bg-white rounded-4 shadow-sm position-relative hover-float">
                            <div className="icon mb-3">
                                <i className="fas fa-seedling text-success fs-1"></i>
                            </div>
                            <p className="mb-0 small fw-semibold text-muted">Organic & Traceable</p>
                        </div>
                    </div>

                    {/* 2. Zero Waste */}
                    <div className="col-6 col-md-3">
                        <div className="p-4 bg-white rounded-4 shadow-sm position-relative hover-float">
                            <div className="icon mb-3">
                                <i className="fas fa-recycle text-success fs-1"></i>
                            </div>
                            <p className="mb-0 small fw-semibold text-muted">Zero Waste</p>
                        </div>
                    </div>

                    {/* 3. Ethical Sourcing */}
                    <div className="col-6 col-md-3">
                        <div className="p-4 bg-white rounded-4 shadow-sm position-relative hover-float">
                            <div className="icon mb-3">
                                <i className="fas fa-hand-holding-heart text-success fs-1"></i>
                            </div>
                            <p className="mb-0 small fw-semibold text-muted">Ethical Sourcing</p>
                        </div>
                    </div>

                    {/* 4. Holistic Living */}
                    <div className="col-6 col-md-3">
                        <div className="p-4 bg-white rounded-4 shadow-sm position-relative hover-float">
                            <div className="icon mb-3">
                                <i className="fas fa-leaf text-success fs-1"></i>
                            </div>
                            <p className="mb-0 small fw-semibold text-muted">Holistic Living</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating animation */}
            <style jsx>{`
        .hover-float {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-float:hover {
          transform: translateY(-8px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        .icon {
          animation: floatIcon 3s ease-in-out infinite;
        }
        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
        </section>
    );
}
