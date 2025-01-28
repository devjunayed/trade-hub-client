"use client";
import ProductTableRow from "@/components/Product/ProductTableRow";
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
          <tr className="bg-[#262626] text-white text-center">
            <th>SL.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: TProduct, index: number) => (
            <ProductTableRow key={product._id} product={product} sl={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
