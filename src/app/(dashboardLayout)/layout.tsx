"use client";
import NavBar from "@/components/Shared/Navbar/Navbar";
import TopNavbar from "@/components/Shared/TopNavbar/TopNavbar";
import {  SidebarWrapper } from "@/components/ui/SidebarWrapper";


import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <SidebarWrapper>{children}</SidebarWrapper>
    </div>
  );
};

export default DashboardLayout;
