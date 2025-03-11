"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { ThrowError } from "@/utils/error";

export const getOrderStats = async () => {
  try {
    const { data } = await axiosInstance.get("/stats/orders-stats");
    return data.data;
  } catch (error) {
    ThrowError(error);
  }
};