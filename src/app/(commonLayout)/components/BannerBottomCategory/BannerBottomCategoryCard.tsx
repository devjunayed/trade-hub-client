"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/react";

const BannerBottomCategoryCard = ({ data }: { data: any }) => {
  return (
    <Card
      className="relative flex items-center justify-center rounded-none h-[150px] md:h-[200px] w-full  overflow-hidden"
    >
      <div className="absolute flex z-10  flex-col items-center justify-center gap-6">
        <p className="text-md md:text-xl text-center text-white uppercase font-bold">{data.title}</p>
        <Button>Shop Now</Button>
      </div>
      <Image
        isZoomed
        removeWrapper
        radius="none"
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={data.image}
      />
    </Card>
  );
};

export default BannerBottomCategoryCard;
