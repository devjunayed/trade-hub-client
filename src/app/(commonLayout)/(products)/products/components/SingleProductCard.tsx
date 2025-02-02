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
import { Swiper as SwiperType } from "swiper/types";
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "react-toastify";

const SingleProductCard = ({ product }: { product: TProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isExcerpt, setIsExcerpt] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product?._id as string,
        name: product.name,
        price: product.price,
        quantity: itemCount,
        image: product.productImages[0],
      })
    )

    toast.success("Product added to the cart" ,{
      position: "top-center"
    })

  }

  return (
    <Card
      className="border-none bg-background/60 dark:bg-default-100/50 min-w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative w-full  col-span-6 md:col-span-6">
            <Swiper
              style={
                {
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                } as unknown as React.CSSProperties
              }
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.productImages.map((imageLink) => (
                <SwiperSlide key={imageLink}>
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
                <SwiperSlide key={imageLink}>
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
            <p className="mt-4">
              {product.description.length > 1000 && isExcerpt
                ? `${product.description.slice(0, 1000)} `
                : product.description}{" "}
              {product.description.length > 1000 && isExcerpt ? (
                <span
                  onClick={() => setIsExcerpt((prev) => !prev)}
                  className="font-bold  cursor-pointer"
                >
                  &#40; Read More &#41;
                </span>
              ) : (
                <span
                  onClick={() => setIsExcerpt((prev) => !prev)}
                  className="font-bold  cursor-pointer"
                >
                  &#40; Hide More &#41;
                </span>
              )}{" "}
            </p>
            <div className="flex text-lg md:text-lg mt-4 items-center justify-between">
              <p className="flex font-bold   items-center justify-center h-full ">
                <IconCurrencyTaka /> {product.price}
              </p>
              <p>Orders 0</p>
            </div>
            <div className="mt-14 mx-auto w-full">
              <div className="flex gap-4 justify-center items-center text-xl">
                <Button
                  className="p-6"
                  onClick={() => setItemCount((prev) => prev + 1)}
                >
                  <BiPlus size={18} />
                </Button>
                <p>{itemCount}</p>
                <Button
                  className="p-6"
                  disabled={itemCount === 1 ? true : false}
                  onClick={() => setItemCount((prev) => prev - 1)}
                >
                  <BiMinus size={18} />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleAddToCart}
                  className=" p-6 text-center mt-10 w-full"
                >
                  <BiCartAdd size={18} /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SingleProductCard;
