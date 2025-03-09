"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./module.banner.css";
import { BannersData } from "./BannersData";
import BannerSlide from "./BannerSlide";
import { useState } from "react";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto">
      <Swiper
        slidesPerView={1}
        loop={true}
        className="mySwiper max-h-[70vh] relative w-full"
        autoplay={{
          delay: 20000,

          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {BannersData.map((data, index) => (
          <SwiperSlide
            key={`banner_${index}`}
            className="min-h-full min-w-full"
          >
            <BannerSlide isActive={index === activeIndex} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
