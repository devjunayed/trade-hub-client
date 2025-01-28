"use client";
import { useGetAllUser } from "@/hooks/user.hook";
import { TUser } from "@/types";
import React from "react";
import UserTableRow from "../components/UserTableRow";
import { CircleLoader } from "react-spinners";

const ManageUser = () => {
  const { data: users, isLoading } = useGetAllUser();

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
      {isLoading && (
        <div className="w-[100vw] min-h-[70vh] flex items-center justify-center">
          <CircleLoader />
        </div>
      )}
      {!isLoading && users?.length === 0 && (
        <div className="w-[100vw] min-h-[70vh] flex items-center justify-center">
          No User found
        </div>
      )}
    </div>
  );
};

export default ManageUser;
