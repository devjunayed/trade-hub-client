/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartItem } from "@/redux/features/cart/cartSlice";
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
export type TResponse = {
  statusCode?: number;
  success: boolean;
  message: string;
  data: object | any;
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


export type TOrderProducts = {
  productId: string;
  quantity: number;
};

export type TOrder = {
  userId?: string;
  transactionId?: string;
  products: CartItem[];
  totalPrice: {
    type: number;
    required: true;
  };
  paymentStatus?: "pending" | "paid" | "canceled";
  city: string;
  deliveryCharge: number;
  deliveryMethod: "express" | "standard" | "pickup";
  email: string;
  manualPaymentMethod?: "bkash" | "nagad";
  manualPaymentPhone?: string;
  moneySent?: string;
  name: string;
  paymentMethod: "manual" | "automatic";
  phone: string;
  postalCode: string;
  shippingAddress: string;
};

