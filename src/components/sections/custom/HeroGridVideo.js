"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const HeroGridVideo = () => {
  const videos = [
    {
      id: 1,
      src: "/img/common/videos/g-1.mp4",
      link: "/videos/martial-arts-training",
    },
    {
      id: 2,
      src: "/img/common/videos/g-2.mp4",
      link: "/videos/self-defense-class",
    },
    {
      id: 3,
      src: "/img/common/videos/g-3.mp4",
      link: "/videos/kids-taekwondo",
    },
    {
      id: 4,
      src: "/img/common/videos/g-4.mp4",
      link: "/videos/fitness-discipline",
    },
  ];

  return (
    <section className="st_hero_grid">
      <div className="container" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {videos.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={item.link} className="text-decoration-none d-block">
                <div
                  className="card border-0 shadow-sm overflow-hidden rounded-3"
                  style={{ height: "380px" }}
                >
                  <div className="position-relative w-100 h-100 ">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroGridVideo;
