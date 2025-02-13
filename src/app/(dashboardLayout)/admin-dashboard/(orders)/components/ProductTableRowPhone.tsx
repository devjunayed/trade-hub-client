"use client"
import { useDeleteProduct } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ProductTableRowPhone = ({
  product,
  sl,
}: {
  product: TProduct;
  sl: number;
}) => {
  const { mutate: handleDelete } = useDeleteProduct();

  const handleDeleteproduct = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  return (
    <tr
      className={`${
        sl % 2 === 0 ? "bg-gray-200" : ""
      } flex flex-col min-h-[200px] border-b`}
    >
      {/* Image Column */}
      <td className="p-2 border flex justify-center items-center">
        <Image
          src={product.productImages[0]} // Assuming `product.image` contains the URL
          alt={product.name}
          width={100} // Adjust the size as needed
          height={100}
          className="object-cover rounded-md"
        />
      </td>

      {/* Product Name Column */}
      <td className="p-2 border">Name: {product.name}</td>

      {/* Category Column */}
      <td className="p-2 border">Category: {product.category.title}</td>

      {/* Price Column */}
      <td className="p-2 border">Price: {product.price}</td>

      {/* Stock Column */}
      <td className="p-2 border">Stock: {product.stockQuantity}</td>

      {/* Action Buttons Column */}
      <td className="p-2 border flex gap-2 justify-center items-center">
        {/* View Button */}
        <Link
          href={`/admin-dashboard/manage-product/${product._id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          <BsEye size={20} />
        </Link>

        {/* Edit Button */}
        <Link
          href={`/admin-dashboard/edit-product/${product._id}`}
          className="text-yellow-600 hover:text-yellow-800"
        >
          <BiEdit size={20} />
        </Link>

        {/* Delete Button */}
        <button
          onClick={() => handleDeleteproduct(product._id as string)}
          className="text-red-600 hover:text-red-800"
        >
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRowPhone;
