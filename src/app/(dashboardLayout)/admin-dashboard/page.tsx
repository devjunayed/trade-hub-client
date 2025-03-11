import React from "react";
import SellsChart from "./components/SellsChart/SellsChart";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import { BiChart,  BiPackage, BiUser } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const page = () => {
  return (
    <div className="px-10">
      <div className="flex gap-4 flex-wrap my-6 justify-center">
        <SummaryCard
          icon={<BiUser size={24} />}
          title="Total Users"
          count={50}
        />
        <SummaryCard
          icon={<AiFillProduct size={24} />}
          title="Total Products"
          count={50}
        />
        <SummaryCard
          icon={<BiPackage size={24} />}
          title="Total Orders"
          count={50}
        />
        <SummaryCard
          icon={<BiChart size={24} />}
          endIcon={<FaBangladeshiTakaSign size={12} />}
          title="Total Revenue"
          count={50}
        />
      </div>
      <h1 className="my-4 text-xl">The Orders of last 30 days</h1>
      <SellsChart />
    </div>
  );
};

export default page;
