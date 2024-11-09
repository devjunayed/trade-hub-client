import { useDeleteCategory } from "@/hooks/category.hook";
import { TCategoryData } from "@/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const CategoryTableRow = ({
  category,
  sl,
}: {
  category: TCategoryData;
  sl: number;
}) => {
  const { mutate: handleDelete } = useDeleteCategory();

  const handleDeleteCategory = (id: string) => {
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
    <tr key={category._id}>
      <th>{sl}</th>
      <td>{category.title}</td>
      <td>{category.description}</td>
      <td className="flex gap-4">
        <Link href={`/admin/edit-category/${category?._id}`}>
          <Button className="bg-green-500 text-white">Edit</Button>
        </Link>
        <Button
          onClick={() => handleDeleteCategory(category?._id as string)}
          className="bg-red-500 text-white"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
