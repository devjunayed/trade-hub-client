"use client";
import Loading from "@/components/Shared/Loading";
import DashboardNavBar from "@/components/Shared/Navbar/DashboardNavbar";
import TopNavbar from "@/components/Shared/TopNavbar/TopNavbar";
import { SidebarWrapper } from "@/components/ui/SidebarWrapper";
import { useUser } from "@/context/user.provider";
import { adminLinks } from "@/utils/sidebar.links";

import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  if(!user){
    return <Loading />
  }

  return (
    <div className="min-h-screen">
      <TopNavbar />
      <DashboardNavBar />
      <SidebarWrapper links={adminLinks}>
        {children}
      </SidebarWrapper>
    </div>
  );
};

export default DashboardLayout;
