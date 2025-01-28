"use client";
import { useGetAllCategory } from "@/hooks/category.hook";
import { TCategoryData } from "@/types";
import React from "react";
import CategoryTableRow from "../components/CategoryTableRow";

const ManageCategories = () => {
  const { data: categories } = useGetAllCategory();
  return (
    <div className="overflow-x-auto w-full mx-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center bg-[#262626] text-white">
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.data?.map((category: TCategoryData, index: number) => (
            <CategoryTableRow key={category._id} category={category} sl={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategories;
