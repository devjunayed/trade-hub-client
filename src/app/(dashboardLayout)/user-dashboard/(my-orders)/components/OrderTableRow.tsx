import { TOrder, TProduct } from "@/types";
import { capitalize } from "@/utils/capitalize";
import Link from "next/link";

import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const OrderTableRow = ({ order, sl }: { order: TOrder; sl: number }) => {
  return (
    <tr className="text-center w-full" key={order._id}>
      <td className="">{sl}</td>
      <td className="">
        {order.products.map((product, index) => (
          <p key={index}>{(product.productId as TProduct).name as string} {!index && '/'}</p>
        ))}
      </td>
      <td>{order.transactionId}</td>
      <td>{order?.totalPrice}</td>
      <td>
        {capitalize(order.paymentMethod)}{" "}
        {order.paymentMethod === "manual" && "/"}{" "}
        {capitalize(order.manualPaymentMethod)}
      </td>
      <td>{capitalize(order.paymentStatus)}</td>
      <td>{capitalize(order.orderStatus)}</td>
      <td className="">
        <div className="flex flex-wrap gap-2 items-center justify-center min-h-[100%]">
          <Link
            className="hover:text-blue-800  text-blue-600"
            href={`/admin-dashboard/manage-order/${order?._id}`}
          >
            <BsEye size={24} />
          </Link>
          <Link
            className="hover:text-yellow-800  text-yellow-600"
            href={`/admin-dashboard/edit-order/${order?._id}`}
          >
            <BiEdit size={24} />
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
