"use client"
import { useUser } from "@/context/user.provider";
import Link from "next/link";
import React from "react";

const TopNavbar = () => {
  const {user} = useUser();
  console.log(user)
  return (
    <>
      {user && (
        <div className="bg-black text-white justify-between py-2 flex px-10">
          <div>
            <p>Howdy, visitor </p>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;
