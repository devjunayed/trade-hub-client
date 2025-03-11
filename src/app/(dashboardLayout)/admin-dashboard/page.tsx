import React from "react";
import SellsChart from "./components/SellsChart/SellsChart";

const page = () => {
  return (
    <div>
      <h1 className="my-4 text-xl">The Orders of last 30 days</h1>
      <SellsChart />
    </div>
  );
};

export default page;
