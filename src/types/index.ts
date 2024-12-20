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
  productImage: string;
  isDeleted?: boolean;
};
