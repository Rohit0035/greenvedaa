"use client";
import React from "react";
import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Products5 = ({ isRelated, title, tag, pt, pb }) => {
  const products = getAllProducts()
    ?.sort((a, b) => b.disc - a.disc)
    .slice(0, 6);

  return (
    <div
      className={`ltn__product-slider-area ltn__product-gutter ${
        pb ? pb : ""
      } ${pt ? pt : isRelated ? "pb-70" : "pt-115 pb-70"}`}
    >
      <div className="container">
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
                {title ? title : "Special Offers"}
                {isRelated && <span>.</span>}
              </h1>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="ltn__product-slider-item-four-active"
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

export default Products5;
