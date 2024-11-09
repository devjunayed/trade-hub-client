"use client";
import TableRow from "@/components/product/productTableRow";
import { useGetAllProduct } from "@/hooks/product.hook";
import {  TProduct } from "@/types";
import React from "react";

const ManageProduct = () => {
  const { data: products } = useGetAllProduct();
  return (
    <div className="overflow-x-auto w-full mx-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product: TProduct, index: number) => (
            <TableRow key={product._id} product={product} sl={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
