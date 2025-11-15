"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import catewel from "../../../../public/img/common/cat-wel.png";
import catesnak from "../../../../public/img/common/cat-snak.png";
import catpowder from "../../../../public/img/common/cat-powder.png";
import cateritual from "../../../../public/img/common/cat-ritual.png";



const HomeCategory = () => {
    const categories = [
        { name: "Snacks", image: catesnak },
        { name: "Wellness", image: catewel },
        { name: "Powders", image: catpowder },
        { name: "Ritual Kits", image: cateritual },
    ];

    return (
        <div className="ltn__category-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="section-title">Top Categories</h1>
                        <p>Explore premium categories curated for your daily lifestyle.</p>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={5}
                    slidesPerView={2}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                        992: { slidesPerView: 4 },
                    }}
                    className="mt-4 text-center"
                >
                    {categories.map((category, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="text-center" data-aos="zoom-in">
                                <div
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "100px",
                                        backgroundColor: "#dcc38978",
                                        margin: "0 auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        style={{ objectFit: "cover" }}
                                        className="w-50"
                                    />
                                </div>

                                <div className="ltn__category-item-name mt-1">
                                    <h5>
                                        <Link href="/shop" className="text-success fs-5 fw-bold">
                                            {category.name}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCategory;
