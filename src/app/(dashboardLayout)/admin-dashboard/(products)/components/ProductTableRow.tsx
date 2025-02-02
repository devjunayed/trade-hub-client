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
    <tr className="text-center " key={product._id}>
      <th>{sl}</th>
      <td>
        <Image
          src={product?.productImages[0]}
          width={50}
          height={50}
          className=" w-7/12"
          alt={`${product?.name}`}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.category.title}</td>
      <td>{product.price} $</td>
      <td>{product.stockQuantity}</td>
      <td className="">
        <Link href={`/admin-dashboard/manage-product/${product?._id}`}>
          <button className="hover:text-green-600 mr-4 text-slate-400">
            <BsEye size={24} />
          </button>
        </Link>
        <Link href={`/admin-dashboard/edit-product/${product?._id}`}>
          <button className="hover:text-green-600 mr-4 text-slate-400">
            <BiEdit size={24} />
          </button>
        </Link>
        <button
          onClick={() => handleDeleteproduct(product?._id as string)}
          className="hover:text-red-400 text-slate-400"
        >
          <MdDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
