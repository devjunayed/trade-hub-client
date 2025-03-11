"use client"
import React from "react";
import SellsChart from "./components/SellsChart/SellsChart";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import { BiChart, BiPackage, BiUser } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TOrderDataStats,  useGetOrderStats } from "@/hooks/stats.hook";
import { MdSurfing } from "react-icons/md";
import { GoogleAnalytics } from "nextjs-google-analytics";

const DashboardPage = () => {
  const { data: ordersStats, isLoading: isOrdersStatsLoading } =
    useGetOrderStats();
  return (
    <div className="px-10">
      <GoogleAnalytics trackPageViews />
      <div className="flex gap-4 flex-wrap my-6 justify-center">
      <SummaryCard
          icon={<MdSurfing size={24} />}
          title="Total Visitors "
          count={ordersStats?.meta.totalRevenue as number}
        />
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
          count={ordersStats?.meta.totalOrders as number}
        />
        <SummaryCard
          icon={<BiChart size={24} />}
          endIcon={<FaBangladeshiTakaSign size={12} />}
          title="Total Revenue"
          count={ordersStats?.meta.totalRevenue as number}
        />
      
      </div>
      <h1 className="my-4 text-xl">The Orders of last 30 days</h1>
      <SellsChart
        ordersStats={ordersStats?.data as unknown as TOrderDataStats[] }
        isOrdersStatsLoading={isOrdersStatsLoading}
      />
    </div>
  );
};

export default DashboardPage;
