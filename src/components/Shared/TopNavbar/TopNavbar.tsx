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
    <>
      <div className="bg-black text-white justify-between py-2 flex px-6">
        <div className="w-[93%]  flex items-center">
          {user && <p className="w-[12%]">Howdy, {user?.name} </p>}
          <div className={`flex ${user ? "w-[88%]" : "w-full"}`}>
            <Marquee className="flex " autoFill={true}>
              <div className=" flex">
                <span className="ml-64">
                  Return delivery is applicable on few terms
                </span>
                <span className="ml-64">
                  Return delivery is applicable on few terms
                </span>
                <span className="ml-64">
                  Return delivery is applicable on few terms
                </span>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="w-[7%]  flex flex-wrap justify-end">
          <ul className="flex mr-2 flex-wrap justify-end items-center gap-4 bg-black">
            <li>
              <ThemeSwitcher />
            </li>

            <li className="">
              <Link href="/cart">
                <BiCart className="relative" size={24} />
                <span className="absolute top-0 right-3 badge-sm badge">
                  {cart.items.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
