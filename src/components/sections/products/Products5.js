"use client";

import React from "react";
import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Products5 = ({ isRelated, title, tag, pt, pb }) => {
  const products = getAllProducts()?.sort((a, b) => b.disc - a.disc).slice(0, 6);

  return (
    <section
      className={`product-slider-section py-5 bg-light ${pt ? pt : ""} ${
        pb ? pb : ""
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            {tag && (
              <h6 className="text-success fw-bold text-uppercase mb-2">
                {tag}
              </h6>
            )}
            <h2 className="fw-bold">
              {title ? title : "Special Offers"}
              <span className="text-success">.</span>
            </h2>
          </div>
        </div>

        {/* ✅ Swiper Only (no slick classes) */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
    </section>
  );
};

export default Products5;
