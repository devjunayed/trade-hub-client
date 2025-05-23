"use client";
import { TOrderDataStats } from "@/hooks/stats.hook";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";


interface TSellsChart {
  isOrdersStatsLoading: boolean;
  ordersStats: TOrderDataStats[]

}

const SellsChart = ({isOrdersStatsLoading, ordersStats}: TSellsChart) => {
  


  return (
    <div className="max-w-lg md:max-w-6xl  mx-auto overflow-x-auto  overflow-y-hidden bg-gray-100 py-4 ">
      {!isOrdersStatsLoading && ordersStats && ordersStats.length > 0 && (
        <ResponsiveContainer className="w-full"   height={300}>
          <BarChart data={[...ordersStats]} width={1500} height={300}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend name="Orders Count" />
            <Bar
              type="monotone"
              dataKey="orderCount"
              stroke="#8884d8"
              strokeWidth={2}
            />
          
          
            <CartesianGrid strokeDasharray="3 3" />

          </BarChart>
        </ResponsiveContainer>
      ) }
    </div>
  );
};

export default SellsChart;
