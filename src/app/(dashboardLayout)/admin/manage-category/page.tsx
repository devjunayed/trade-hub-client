"use client";
import TableRow from "@/components/Category/TableRow";
import { useGetCategory } from "@/hooks/category.hook";
import { TCategoryData } from "@/types";
import React from "react";

const ManageCategories = () => {
  const { data: categories } = useGetCategory();
  return (
    <div className="overflow-x-auto w-full mx-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.data?.map((category: TCategoryData, index: number) => (
            <TableRow  key={category._id} category={category} sl={index+1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategories;
