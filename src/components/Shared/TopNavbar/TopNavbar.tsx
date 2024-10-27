import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const TopNavbar = () => {
  return (
    <div className="bg-black text-white justify-between py-2 flex px-10">
      <div>
        <p>Howdy, visitor </p>
      </div>
      <div className="w-9/12">
        <Marquee>you are not logged in</Marquee>
      </div>
      <div>
        <p>
          🔒 <Link href="/login">login</Link> /{" "}
          <Link href="/register">register</Link>
        </p>
      </div>
    </div>
  );
};

export default TopNavbar;
