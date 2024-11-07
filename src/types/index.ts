import { ReactNode } from "react";

export interface TLinkItem {
    label: string;
    href?: string;
    icon: ReactNode;
    subLinks?: TLinkItem[];
  }


export interface TCategoryData{
  _id?: string;
  title: string;
  description: string;
}