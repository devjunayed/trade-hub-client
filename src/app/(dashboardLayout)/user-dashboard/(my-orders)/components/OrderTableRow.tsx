import { TOrder, TProduct } from "@/types";
import { capitalize } from "@/utils/capitalize";
import Link from "next/link";
import Moment from "react-moment";
import React from "react";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const OrderTableRow = ({ order, sl }: { order: TOrder; sl: number }) => {
  return (
    <tr className="text-center w-full" key={order._id}>
      <td className="">{sl}</td>
      <td className="">
       {(order.products[0].productId as TProduct).name} ...
      </td>
      <td>{order?.totalPrice}</td>
      
      <td>{capitalize(order.paymentStatus)}</td>
      <td>
        <p className="flex items-center gap-2 justify-center">

        {order.orderStatus === "processing" && (
          <span className="bg-[#FACC15] rounded-full block w-1 h-1 p-2"></span>
        )}
        {order.orderStatus === "shipping" && (
          <span className="bg-[#3882F6] rounded-full block w-1 h-1 p-2"></span>
        )}
        {order.orderStatus === "canceled" && (
          <span className="bg-[#EF4444] rounded-full block w-1 h-1 p-2"></span>
        )}
        {order.orderStatus === "completed" && (
          <span className="bg-[#22C55E] rounded-full block w-1 h-1 p-2"></span>
        )}
        {capitalize(order.orderStatus)}
        </p>
      </td>
      <td>
        <Moment format="DD MMM, YY">{order.createdAt}</Moment>
      </td>
      <td className="">
        <div className="flex flex-wrap gap-2 items-center justify-center min-h-[100%]">
          <Link
            className="hover:text-blue-800  text-blue-600"
            href={`/user-dashboard/my-orders/${order?._id}`}
          >
            <BsEye size={24} />
          </Link>
          <button
            onClick={() => {}}
            className="hover:text-red-800 text-red-600"
          >
            <MdDelete size={24} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderTableRow;
