import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({ activePath, labels }: { activePath: string; labels: string[] }) => {
 
  return (
    <div className="bg-[#262626] my-6 min-h-[50px] hidden md:flex text-white  px-4 items-center gap-2 w-full rounded-xl">
      <Link href="/">
        <BiHome size={24} />
      </Link>{" "}
      {labels.length > 0 &&
        labels.map((singleLabel) => (
          <div className="flex  text-white justify-center gap-2 items-center" key={singleLabel}>
            <FaAngleRight size={24} />{" "}
            <Link className={`  ${activePath === singleLabel && "border-b "} border-white py-1  `} href={`/${singleLabel}`}>
              {singleLabel}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BreadCrumb;
