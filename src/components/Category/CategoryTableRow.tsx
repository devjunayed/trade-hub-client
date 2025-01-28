import { useDeleteCategory } from "@/hooks/category.hook";
import { TCategoryData } from "@/types";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
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
    <tr className="text-center " key={category._id}>
      <th>{sl}</th>
      <td>{category.title}</td>
      <td>{category.description}</td>
      <td className="flex gap-4 justify-center items-center">
        <Link href={`/admin-dashboard/edit-category/${category?._id}`}>
          <button className="hover:text-green-600 text-slate-400">
            <BiEdit size={24} />
          </button>
        </Link>
        <button
          onClick={() => handleDeleteCategory(category?._id as string)}
          className="hover:text-red-400 text-slate-400"
        >
          <MdDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
