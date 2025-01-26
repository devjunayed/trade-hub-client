"use client";
import { useUser } from "@/context/user.provider";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const TopNavbar = () => {
  const { user } = useUser();
  return (
    <>
      {user && (
        <div className="bg-black text-white justify-between py-2 flex px-10">
          <div>
            <p>Howdy, {user?.name} </p>
          </div>
          <div>
            <ul>
              <li>
               <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;
