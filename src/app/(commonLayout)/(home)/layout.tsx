import React from "react";
import Banner from "./components/Banner/Banner";
import BannerBottomCategory from "./components/BannerBottomCategory/BannerBottomCategory";
import Faq from "./components/Faq/Faq";

const HomeLayout = ({
  bestselling,
  newarrival,
  featured,
}: {
  bestselling: React.ReactNode;
  newarrival: React.ReactNode;
  featured: React.ReactNode;
}) => {
  return (
    <div>
      <Banner />
      <BannerBottomCategory />
      <div className="bg-white dark:bg-gray-900">
        {featured}
        {bestselling}
        {newarrival}
      </div>
      <Faq />
    </div>
  );
};

export default HomeLayout;
