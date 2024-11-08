/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { TProduct } from "@/types";
import { ThrowError } from "@/utils/error";

export const uploadImageToImgBB = async (formData: any) => {
 

  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const response = await axiosInstance.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data.data.url as string;
};


export const createProduct = async (productData: TProduct) => {
  try {
    const { data } = await axiosInstance.post("/product", productData);
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
export const getAllProduct= async () => {
  try {
    const { data } = await axiosInstance.get("/product");
    return data;
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
