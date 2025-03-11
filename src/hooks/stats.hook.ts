import { getOrderStats } from "@/services/OrderStatsService";
import { useQuery } from "@tanstack/react-query";

export interface TOrderStats{
    orderCount: number;
    date: string;
}

export const useGetOrderStats = () => {
  return useQuery<TOrderStats[], Error, TOrderStats[]>({
    queryKey: ["GET_ORDER_STATS"],
    queryFn: async () => await getOrderStats(),
    staleTime: 0,
  });
};
