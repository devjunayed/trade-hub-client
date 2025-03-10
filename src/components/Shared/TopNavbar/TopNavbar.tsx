"use client";
import { useUser } from "@/context/user.provider";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import TopNavbarMiddle from "./TopNavbarMiddle";

const TopNavbar = () => {
  const { user } = useUser();

  return (
    <div className="bg-black text-sm text-white  py-1 flex justify-between items-center">
      <div className="max-w-7xl px-2 md:px-6 mx-auto flex items-center w-full">
        {/* Left Section */}
        <div className="flex items-center flex-shrink-0">
          {user && <p className=" hidden md:block pr-2">Howdy, {user?.name}</p>}
        </div>

        {/* Middle Section (Marquee) */}
        <div className="relative flex-1 flex flex-col justify-center w-full ">
          
          <TopNavbarMiddle />
     
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0  flex justify-end">
          <ul className="flex gap-2 items-center">
            <li>
              <ThemeSwitcher />
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
