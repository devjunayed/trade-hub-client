/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/react";

const BannerSlide = ({ data }: {data: any}) => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-serif">{data.title}</h1>
          <p className="mb-5 font-serif">{data.subtitle}</p>
          <Button className="">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
