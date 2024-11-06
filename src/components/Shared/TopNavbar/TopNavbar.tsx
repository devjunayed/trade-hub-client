"use client";
import { useUser } from "@/context/user.provider";
import Link from "next/link";
import React from "react";

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
                <Link href={`/${user.role}/dashboard`}>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;
