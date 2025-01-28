/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { ThrowError } from "@/utils/error";
import { NextResponse } from "next/server";

export const createUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/user/admin-create", userData);
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};

export const getUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data?.success) {
      cookies().set("access-token", data?.data?.accessToken);
      cookies().set("refresh-token", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};



export const updateUser = async () => {
  try {
    cookies().delete("access-token");
    cookies().delete("refresh-token");
  } catch (error: any) {
    ThrowError(error);
  }
};

