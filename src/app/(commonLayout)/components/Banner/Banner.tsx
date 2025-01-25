"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./module.banner.css";
import { BannersData } from "./BannersData";
import BannerSlide from "./BannerSlide";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="mySwiper max-h-[70vh] relative w-full"
        autoplay
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {BannersData.map((data, index) => (
          <SwiperSlide
            key={`banner_${index}`}
            className="min-h-full min-w-full"
          >
            <BannerSlide data={data}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
