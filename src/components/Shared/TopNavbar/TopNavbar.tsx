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
    <div className="bg-black text-sm text-white pl-4 py-1 flex justify-between items-center md:px-6">
      <div className="max-w-6xl mx-auto flex items-center w-full">
        {/* Left Section */}
        <div className="flex items-center flex-shrink-0">
          {user && <p className=" hidden md:block pr-2">Howdy, {user?.name}</p>}
        </div>

        {/* Middle Section (Marquee) */}
        <div className="flex-1  w-full overflow-hidden">
          <Marquee direction="down" autoFill={true}>
            <div className="flex">
              <span className="mx-4">
                Return delivery is applicable on few terms
              </span>
              <span className="mx-4">
                Return delivery is applicable on few terms
              </span>
              <span className="mx-4">
                Return delivery is applicable on few terms
              </span>
            </div>
          </Marquee>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 px-4 flex justify-end">
          <ul className="flex gap-2 items-center">
            <li>
              <ThemeSwitcher />
            </li>
            <li className="flex items-center ">
              <Link href="/cart" className="relative  md:pr-2 pr-6">
                <BiCart size={18} />
                <span className="absolute -top-1 md:-right-2 right-2 badge-xs badge">
                  {cart.products.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
