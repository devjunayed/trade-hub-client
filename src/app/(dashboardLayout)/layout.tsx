"use client";
import Loading from "@/components/Shared/Loading";
import { useUser } from "@/context/user.provider";

import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  if(!user){
    return <Loading />
  }

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default DashboardLayout;
