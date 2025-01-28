/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { ThrowError } from "@/utils/error";
import { NextResponse } from "next/server";
import { TUser } from "@/types";

export const createUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/user/admin-create", userData);
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};

export const getAllUser = async () => {
  try {
    const { data } = await axiosInstance.get("/user");
    return data.data;
  } catch (error: any) {
    ThrowError(error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/user/${userId}`);
    return data.data;
  } catch (error: any) {
    ThrowError(error);
  }
};



export const editUser = async (userData: TUser) => {
  try {
    const { data } = await axiosInstance.patch(`/user/${userData._id}`, userData);
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};
export const deleteUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/user/${userId}`);
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};

