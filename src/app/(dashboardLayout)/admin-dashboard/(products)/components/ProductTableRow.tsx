import { useDeleteProduct } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ProductTableRow = ({
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
    <tr className="text-center w-full" key={product._id}>
      <td className="">{sl}</td>
      <td>
        <Image
        className="mx-auto"
          src={product?.productImages[0]}
          width={50}
          height={50}
          alt={`${product?.name}`}
        />
      </td>
      <td >{product.name}</td>
      <td>{product.category.title}</td>
      <td className="min-w-[90px]">{product.price} $</td>
      <td>{product.stockQuantity}</td>
      <td className="">
        <div className="flex flex-wrap gap-2 items-center justify-center min-h-[100%]">
          <Link
            className="hover:text-green-600  text-slate-400"
            href={`/admin-dashboard/manage-product/${product?._id}`}
          >
            <BsEye size={24} />
          </Link>
          <Link
            className="hover:text-green-600  text-slate-400"
            href={`/admin-dashboard/edit-product/${product?._id}`}
          >
            <BiEdit size={24} />
          </Link>
          <button
            onClick={() => handleDeleteproduct(product?._id as string)}
            className="hover:text-red-400 text-slate-400"
          >
            <MdDelete size={24} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
