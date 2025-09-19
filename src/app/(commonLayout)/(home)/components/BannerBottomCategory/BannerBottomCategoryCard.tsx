"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";

const BannerBottomCategoryCard = ({ data }: { data: any }) => {
  return (
    <Card className="group relative flex items-center justify-center rounded-none h-[150px] md:h-[200px] w-full  overflow-hidden">
      <div className=" flex z-10  flex-col items-center justify-center gap-6">
        <p className="text-md md:text-xl text-center text-white uppercase font-bold">
          {data.title}
        </p>
        <Link
          href="/products"
          className="border-b border-white py-2 text-white"
        >
          Shop Now
        </Link>
      </div>
      <Image
        fill
        quality={1}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        alt="Relaxing app background"
        className="z-0 w-full h-full ease-in-out transition-transform duration-300 object-cover group-hover:scale-125"
        src={`/${data.image}`}
      />
    </Card>
  );
};

export default BannerBottomCategoryCard;
