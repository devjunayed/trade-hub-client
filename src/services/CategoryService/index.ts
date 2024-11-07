"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { TCategoryData } from "@/types";
import { ThrowError } from "@/utils/error";

export const createCategory = async (categoryData: TCategoryData) => {
  try {
    const { data } = await axiosInstance.post("/category", categoryData);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const updateCategory = async (
  categoryId: string,
  categoryData: TCategoryData
) => {
  try {
    const { data } = await axiosInstance.patch(
      `/category/${categoryId}`,
      categoryData
    );
    return data;
  } catch (error) {
    ThrowError(error);
  }
};

export const getSingleCategory = async (categoryId: string) => {
  try {
    const { data } = await axiosInstance.get(`/category/${categoryId}`);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/category");
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
export const deleteCategory = async (categoryId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/category/${categoryId}`);
    return data;
  } catch (error) {
    ThrowError(error);
  }
};
