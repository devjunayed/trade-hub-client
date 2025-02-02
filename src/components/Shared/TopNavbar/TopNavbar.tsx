"use client";
import { useUser } from "@/context/user.provider";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import Marquee from "react-fast-marquee";
import { BiCart } from "react-icons/bi";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";

const TopNavbar = () => {
  const { user } = useUser();
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="bg-black text-white py-2 flex justify-between items-center md:px-6">
      {/* Left Section */}
      <div className="flex items-center flex-shrink-0">
        {user && <p className="hidden md:block">Howdy, {user?.name}</p>}
      </div>

      {/* Middle Section (Marquee) */}
      <div className="flex-1 mx-4 w-full overflow-hidden">
        <Marquee autoFill={true}>
          <div className="flex">
            <span className="mx-4">Return delivery is applicable on few terms</span>
            <span className="mx-4">Return delivery is applicable on few terms</span>
            <span className="mx-4">Return delivery is applicable on few terms</span>
          </div>
        </Marquee>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 flex justify-end">
        <ul className="flex gap-2 items-center">
          <li>
            <ThemeSwitcher />
          </li>
          <li className="flex items-center ">
            <Link href="/cart" className="relative  md:pr-2 pr-6">
              <BiCart size={24} />
              <span className="absolute -top-2 md:-right-2 right-2 badge-sm badge">
                {cart.items.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
