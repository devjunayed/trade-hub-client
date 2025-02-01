"use client";
import { TProduct } from "@/types";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IconCurrencyTaka } from "@tabler/icons-react";

const SingleProductCard = ({ product }: { product: TProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Card
      className="border-none bg-background/60 dark:bg-default-100/50 min-w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative w-full  col-span-6 md:col-span-6">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff" ,
                "--swiper-pagination-color": "#fff",
              } as unknown as React.CSSProperties}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.productImages.map((imageLink) => (
                <SwiperSlide>
                  <Image
                    alt="Album cover"
                    className="object-cover w-full "
                    src={imageLink}
                    width="100%"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={4}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-2"
            >
              {product?.productImages.map((imageLink) => (
                <SwiperSlide>
                  <Image
                    isZoomed
                    alt="Album cover"
                    className="object-cover w-full"
                    src={imageLink}
                    width="100%"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-full p-10 flex flex-col col-span-6 md:col-span-6">
            <h1 className="text-xl md:text-3xl">{product.name}</h1>
            <h4>{product.category.title}</h4>
            <p className="mt-4">{product.description}</p>
            <div className="flex text-lg md:text-lg mt-4 items-center justify-between">

            <p className="flex font-bold   items-center justify-center h-full "><IconCurrencyTaka  /> {product.price}</p>
            <p>Orders 0</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SingleProductCard;
