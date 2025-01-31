import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({path, label}: {path: string; label: string}) => {
  return (
    <div className="bg-[#262626] my-6 min-h-[50px] text-white flex px-4 items-center gap-4 w-full rounded-xl">
      <Link href="/">
        <BiHome size={24} />
      </Link>{" "}
      <FaAngleRight size={24} />{" "}
      <Link className="border-b border-white py-1" href={path}>
        {label}
      </Link>
    </div>
  );
};

export default BreadCrumb;
