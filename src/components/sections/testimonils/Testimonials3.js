"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialCard2 from "@/components/shared/cards/TestimonialCard2";
import getAllTestimonials from "@/libs/getAllTestimonials";

const Testimonials3 = ({ pt }) => {
  const testimonials = getAllTestimonials()?.filter(
    ({ id }) => id > 10 && id < 16
  );

  return (
    <div
      className={`ltn__testimonial-area section-bg-1 py-5  ${
        pt ? pt : ""
      }`}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle text-success fs-4 fw-bold">
                {"//"} Testimonials
              </h6>
              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1200: { slidesPerView: 2 },
          }}
          className="testimonial-swiper"
        >
          {testimonials?.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div data-aos="zoom-in">
                <TestimonialCard2 testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials3;
