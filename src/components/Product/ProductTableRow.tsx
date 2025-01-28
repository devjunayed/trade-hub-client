import { useDeleteProduct } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
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
          src={product.productImage}
          width={25}
          height={25}
          alt={`${product?.name}`}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.category.title}</td>
      <td>{product.price} $</td>
      <td>{product.stockQuantity}</td>
      <td className="flex h-full gap-4  items-center justify-center ">
        <Link href={`/admin/edit-product/${product?._id}`}>
          <button className="hover:text-green-600 text-slate-400">
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
