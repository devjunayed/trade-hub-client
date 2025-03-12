/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { TOrder } from "@/types";
import { ThrowError } from "@/utils/error";

export const createOrder = async (orderData: TOrder) => {
  try {
    const { data } = await axiosInstance.post("/order", orderData);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
// export const updateOrder = async (
//   productId: string,
//   productData: TOrder
// ) => {
//   try {
//     const { data } = await axiosInstance.patch(
//       `/product/${productId}`,
//       productData
//     );
//     return data;
//   } catch (error) {
//     ThrowError(error);
//   }
// };

export const getUserOrders = async ({
  page,
  search,
  sort,
  filter,
}: {
  page?: number;
  search?: string;
  sort?: string;
  filter?: string;
}) => {
  try {
    const { data } = await axiosInstance.get(
      `/order/user-orders/?searchTerm=${search}&page=${page}&sort=${sort}&category=${filter}`
    );

    console.log(data)
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const getAllOrder = async (search?: string, page: number = 1) => {
  try {
    const { data } = await axiosInstance.get(
      `/order?page=${page}${search ? `&searchTerm=${search}` : ""}`
    );
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const deleteOrder = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/product/${productId}`);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
