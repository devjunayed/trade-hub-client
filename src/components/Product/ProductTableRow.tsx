
import { useDeleteProduct } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
    <tr key={product._id}>
      <th>{sl}</th>
      <td><Image src={product.productImage} width={25} height={25} alt={`${product?.name}`} /></td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.category.title}</td>
      <td>{product.price} $</td>
      <td>{product.stockQuantity}</td>
      <td className="flex gap-4">
        <Link href={`/admin/edit-product/${product?._id}`}>
          <Button className="bg-green-500 text-white">Edit</Button>
        </Link>
        <Button
          onClick={() => handleDeleteproduct(product?._id as string)}
          className="bg-red-500 text-white"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
