"use client";

import { useGetUser } from "@/hooks/user.hook";
import { Avatar } from "@heroui/avatar";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const ManageProduct = ({ params }: { params: { userId: string } }) => {
  const { data: user } = useGetUser(params.userId);
  return (
    <div className="overflow-x-auto relative flex flex-col justify-center items-center max-h-[80vh] md:my-6 md:h-1/12 md:w-1/2 bg-white  shadow-xl p-4">
      <div className="absolute top-4 right-4">
        <Link href={`/admin-dashboard/edit-user/${user?._id}`} className="bg-none  border flex items-center justify-center w-12 h-12 m-0 p-0">
          <BiEdit className="text-slate-500" size={24} />
        </Link>
      </div>
      <div>
      {user?.image ? (
          <Avatar className="w-44 h-44" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        ) : (
          <Avatar className="w-44 h-44 text-5xl"  name={user?.name.slice(0, 1)} />
        )}
      </div>
      <div className="mt-14   flex flex-col gap-4 w-9/12">
        <p>
          <span className="font-semibold">Name :</span> {user?.name}
        </p>
        <p>
          <span className="font-semibold">Email :</span> {user?.email}
        </p>
        <p>
          <span className="font-semibold">Phone :</span> {user?.phone}
        </p>
        <p>
          <span className="font-semibold">Address :</span> {user?.address}
        </p>
        <p>
          <span className="font-semibold">Role :</span>{" "}
          {user?.role &&
            user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default ManageProduct;
