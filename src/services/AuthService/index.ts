/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/user/user-create", userData);
    if (data.success) {
      cookies().set("access-token", data?.data?.accessToken);
      cookies().set("refresh-token", data?.data.refreshToken);
    }
    return data;
  } catch (error: any) {
    // Check if the error response exists and return the message
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "An error occurred");
    }
    // If no specific error message, return a general error
    throw new Error("An unexpected error occurred");
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get('access-token')?.value;
  let decodedToken = null;

  if(accessToken){
    decodedToken = await jwtDecode(accessToken);

    return {
      userId: decodedToken.userId,
      role: decodedToken.role
    }
  }
  return decodedToken;
}