"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";

const ProductHome = ({ isRelated, title, tag, pt, pb }) => {
  const products = getAllProducts()
    ?.sort((a, b) => b.disc - a.disc)
    .slice(0, 6);

  return (
    <div
      data-aos="zoom-in"
      className={`ltn__product-slider-area ltn__product-gutter py-5 ${pb ? pb : ""} ${
        pt ? pt : isRelated ? "" : ""
      }`}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`section-title-area ${
                isRelated ? "ltn__section-title-2" : "text-center"
              }`}
            >
              {tag && (
                <h6 className="section-subtitle ltn__secondary-color">{tag}</h6>
              )}
              <h1 className="section-title">
                {title ? title : "Our Products"}
                {isRelated ? <span>.</span> : ""}
              </h1>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="product-swiper"
        >
          {products?.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCardPrimary product={product} isShowDisc={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductHome;
