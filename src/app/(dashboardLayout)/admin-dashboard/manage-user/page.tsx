"use client";
import { useGetAllUser } from "@/hooks/user.hook";
import { TUser } from "@/types";
import React from "react";
import UserTableRow from "./components/UserTableRow/UserTableRow";

const ManageProduct = () => {
  const { data: users } = useGetAllUser();

  console.log(users);
  return (
    <div className="overflow-x-auto w-full mx-10">
      <table className="table min-w-full">
        {/* head */}
        <thead>
          <tr className="text-center bg-[#262626] text-white">
            <th>SL.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: TUser, index: number) => (
            <UserTableRow key={user._id} user={user} sl={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
