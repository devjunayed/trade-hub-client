"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./module.banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
        pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
