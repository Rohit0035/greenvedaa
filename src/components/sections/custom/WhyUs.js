"use client";
import Image from "next/image";
import {
    FaLeaf,
    FaShieldAlt,
    FaTruck,
    FaHeartbeat,
    FaSeedling,
    FaHandsHelping,
} from "react-icons/fa";
import verimg from "../../../../public/img/common/ver-img.png"

const WhyUs = () => {
    const leftCards = [
        {
            icon: <FaLeaf className="text-success fs-2 mb-3" />,
            title: "Fresh & Organic",
            desc: "We bring you naturally grown, chemical-free products directly from trusted farms.",
        },
        {
            icon: <FaShieldAlt className="text-success fs-2 mb-3" />,
            title: "Safe & Certified",
            desc: "All GreenVedaa products are tested and certified to ensure complete safety for you and your family.",
        },
        {
            icon: <FaTruck className="text-success fs-2 mb-3" />,
            title: "Fast Delivery",
            desc: "Get your organic essentials delivered quickly and safely to your doorstep.",
        },
    ];

    const rightCards = [
        {
            icon: <FaHeartbeat className="text-success fs-2 mb-3" />,
            title: "Healthy Lifestyle",
            desc: "Choose clean, nutritious, and eco-friendly food to build a healthier tomorrow.",
        },
        {
            icon: <FaSeedling className="text-success fs-2 mb-3" />,
            title: "Eco Sustainability",
            desc: "Every purchase supports farmers using sustainable and earth-friendly practices.",
        },
        {
            icon: <FaHandsHelping className="text-success fs-2 mb-3" />,
            title: "Trust & Transparency",
            desc: "We maintain complete transparency about product sources and ingredients.",
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container text-center">
                {/* Section Title */}
                <div className="mb-5">
                    <h6 className="text-success fw-bold fs-4">WHY CHOOSE US</h6>
                    <h1 className="fw-bold mb-3">
                        Get Extra Benefits<span className="text-success">.</span>
                    </h1>
                    <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
                        At GreenVedaa, we believe in promoting wellness through natural and
                        organic living. Discover the reasons our customers trust us for
                        purity and sustainability.
                    </p>
                </div>

                {/* Cards & Image Layout */}
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="d-flex flex-column gap-4">
                            {leftCards.map((item, index) => (
                                <div
                                    key={index}
                                    className="card border-0 rounded-4 shadow-sm h-100 text-center p-4" data-aos="zoom-in"
                                >
                                    <span className="text-center">{item.icon}</span>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="col-lg-4 text-center mb-3 mt-3 mt-lg-0 mb-lg-0" data-aos="zoom-in">
                        <Image
                            src={verimg}
                            alt="GreenVedaa Benefits"
                            className="rounded-4 w-100"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-4">
                            {rightCards.map((item, index) => (
                                <div
                                    key={index}
                                    className="card border-0 shadow-sm h-100 text-center p-4 rounded-4" data-aos="zoom-in"
                                >
                                    <span className="text-center">{item.icon}</span>

                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
