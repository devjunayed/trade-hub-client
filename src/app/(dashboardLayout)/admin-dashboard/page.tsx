"use client";
import React from "react";
import SellsChart from "./components/SellsChart/SellsChart";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import { BiChart, BiPackage, BiUser } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TOrderDataStats, useGetOrderStats } from "@/hooks/stats.hook";
import { MdSurfing } from "react-icons/md";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Loading from "@/components/Shared/Loading";

const DashboardPage = () => {
  const { data: ordersStats, isLoading: isOrdersStatsLoading } =
    useGetOrderStats();
  return (
    <div className="mx-10">
      <GoogleAnalytics
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        trackPageViews
        debugMode
      />

      {isOrdersStatsLoading && <div><Loading /> </div>}
      {!isOrdersStatsLoading && (
        <>
          <div className="flex gap-4 flex-wrap my-6 justify-center">
            <SummaryCard
              icon={<MdSurfing size={24} />}
              title="Total Visits "
              count={ordersStats?.meta.totalVisitors as number}
            />
            <SummaryCard
              icon={<BiUser size={24} />}
              title="Total Users"
              count={ordersStats?.meta.totalUsers as number}
            />
            <SummaryCard
              icon={<AiFillProduct size={24} />}
              title="Total Products"
              count={ordersStats?.meta.totalProducts as number}
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
            ordersStats={ordersStats?.data as unknown as TOrderDataStats[]}
            isOrdersStatsLoading={isOrdersStatsLoading}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
