/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { CartItem } from "@/redux/features/cart/cartSlice";
import { TProduct } from "@/types";
import { ThrowError } from "@/utils/error";

export const createOrder = async (cartData: CartItem[]) => {
  try {
    const { data } = await axiosInstance.post("/order", { products: cartData });
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const updateProduct = async (
  productId: string,
  productData: TProduct
) => {
  try {
    const { data } = await axiosInstance.patch(
      `/product/${productId}`,
      productData
    );
    return data;
  } catch (error) {
    ThrowError(error);
  }
};

export const getSingleProduct = async (productId: string) => {
  try {
    const { data } = await axiosInstance.get(`/product/${productId}`);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const getAllOrder = async (search?: string, page: number = 1) => {
  try {
    const { data } = await axiosInstance.get(
      `/order?page=${page}&searchTerm=${search}`
    );
    console.log(data);
    return data.data;
  } catch (error) {
    ThrowError(error);
  }
};
export const deleteProduct = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/product/${productId}`);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
