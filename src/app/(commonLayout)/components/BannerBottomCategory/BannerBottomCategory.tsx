import React from "react";
import { BannersData } from "../Banner/BannersData";
import BannerBottomCategoryCard from "./BannerBottomCategoryCard";

const BannerBottomCategory = () => {
  return (
    <div className="flex mt-4 gap-4 flex-col md:flex-row justify-center items-center">
      {BannersData.slice(0, 3).map((data) => (
        <BannerBottomCategoryCard key={data.title} data={data} />
      ))}
    </div>
  );
};

export default BannerBottomCategory;
