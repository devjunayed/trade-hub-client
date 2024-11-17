"use client";
import Loading from "@/components/Shared/Loading";
import NavBar from "@/components/Shared/Navbar/Navbar";
import TopNavbar from "@/components/Shared/TopNavbar/TopNavbar";
import { SidebarWrapper } from "@/components/ui/SidebarWrapper";
import { useUser } from "@/context/user.provider";
import { adminLinks, userLinks } from "@/utils/sidebar.links";

import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  if(!user){
    return <Loading />
  }

  return (
    <div className="min-h-screen">
      <TopNavbar />
      <NavBar />
      <SidebarWrapper links={user?.role === "admin" ? adminLinks : userLinks}>
        {children}
      </SidebarWrapper>
    </div>
  );
};

export default DashboardLayout;
