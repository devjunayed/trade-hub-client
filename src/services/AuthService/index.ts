/* eslint-disable @typescript-eslint/no-unused-vars */
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

export const loginUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data?.success) {
      cookies().set("access-token", data?.data?.accessToken);
      cookies().set("refresh-token", data?.data?.refreshToken);
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
  try {
    const accessToken = cookies().get("access-token")?.value;
    let decodedToken = null;

    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);

      const { data } = await axiosInstance.get(`/user/${decodedToken?.userId}`);

      return {
        ...data.data[0],
      };
    }
    return decodedToken;
  } catch (error: any) {
    // Check if the error response exists and return the message
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "An error occurred");
    }
    // If no specific error message, return a general error
    throw new Error("An unexpected error occurred");
  }
};

export const logOutUser = async () => {
  try {
    cookies().delete("access-token");
    cookies().delete("refresh-token");
  } catch (error: any) {
    // Check if the error response exists and return the message
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "An error occurred");
    }
    // If no specific error message, return a general error
    throw new Error("An unexpected error occurred");
  }
};

export const setAccessToken = (accessToken: string) => {
  cookies().set("access-token", accessToken);
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refresh-token")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error: any) {
    throw new Error("Failed to get new access token");
  }
};
