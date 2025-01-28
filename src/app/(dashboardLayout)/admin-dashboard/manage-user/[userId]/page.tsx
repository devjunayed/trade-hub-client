"use client";

import { Avatar } from "@heroui/avatar";
import { BiEdit } from "react-icons/bi";

const ManageProduct = () => {
  return (
    <div className="overflow-x-auto relative flex flex-col justify-center items-center my-6 h-1/12 w-1/2 bg-white  shadow-xl ">
      <div className="absolute top-4 right-4">
        <button className="bg-none  border flex items-center justify-center w-12 h-12 m-0 p-0">
          <BiEdit className="text-slate-500" size={24} />
        </button>
      </div>
      <div>
        <Avatar
          className="w-44 h-44"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </div>
      <div className="mt-14 text-xl  flex flex-col gap-4 w-9/12">
        <p>
          <span className="font-semibold">Name :</span> Kuddus
        </p>
        <p>
          <span className="font-semibold">Email :</span> kuddus@gmail.com
        </p>
        <p>
          <span className="font-semibold">Phone :</span> 01814676613
        </p>
        <p>
          <span className="font-semibold">Address :</span> Somewhere, No-Where
        </p>
        <p>
          <span className="font-semibold">Role :</span> Admin
        </p>
      </div>
    </div>
  );
};

export default ManageProduct;
