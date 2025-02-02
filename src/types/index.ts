/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface TLinkItem {
    label: string;
    href?: string;
    icon: ReactNode;
    subLinks?: TLinkItem[];
  }


export interface TCategoryData{
  _id?: string;
  title: string | undefined;
  description: string | undefined;
}
export type TProduct = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: any;
  productImages: string[];
  isDeleted?: boolean;
};


export type TLoginResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export type TRegisterResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    name: string;
    role?: string;
    id?: string;
    refreshToken: string;
  };
};

export enum TRole{
  USER = 'user',
  ADMIN = 'admin'
};

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  image?: string;
  address: string;
  password?: string | undefined;
  confirmPassword?: string;
  role: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
};