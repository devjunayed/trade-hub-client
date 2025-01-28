
import { useDeleteProduct } from "@/hooks/product.hook";
import {  TUser } from "@/types";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const UserTableRow = ({
  user,
  sl,
}: {
  user: TUser;
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
    <tr key={user._id} className="text-center w-full">
      <th>{sl}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>
      <td className="flex gap-4 justify-center items-center">
        <Link href={`/admin-dashboard/edit-user/${user?._id}`}>
          <button className="hover:text-green-600 text-slate-400"><BiEdit size={24} /></button>
        </Link>
        <button
          onClick={() => handleDeleteproduct(user?._id as string)}
          className="hover:text-red-400 text-slate-400"
        >
          <MdDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
