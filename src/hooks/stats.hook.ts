import { getOrderStats } from "@/services/OrderStatsService";
import { useQuery } from "@tanstack/react-query";

export interface TOrderDataStats {
  date: string;
  orderCount: number;
}

export interface TOrderStats {
  data: TOrderDataStats[];
  meta: { totalOrders: number; totalRevenue: number };
}

export const useGetOrderStats = () => {
  return useQuery<TOrderStats, Error, TOrderStats>({
    queryKey: ["GET_ORDER_STATS"],
    queryFn: async () => await getOrderStats(),
    staleTime: 0,
  });
};
