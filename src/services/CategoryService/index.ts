"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { TCategoryData } from "@/types";
import { ThrowError } from "@/utils/error";

export const createCategory = async(categoryData: TCategoryData) =>{
    try {
        const {data} = await axiosInstance.post("/category", categoryData);
        return data;
    } catch (error) {
        ThrowError(error);
    }
}