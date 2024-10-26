import Navbar from "@/components/Shared/Navbar/Navbar";
import TopNavbar from "@/components/Shared/TopNavbar/TopNavbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
