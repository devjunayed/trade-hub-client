import { TOrder, TProduct } from "@/types";
import { capitalize } from "@/utils/capitalize";
import Moment from "react-moment";
import React from "react";
import { BsEye } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Modal } from "antd";
import { localPriceFormat } from "@/utils/localPriceFormat";
import OrderStatus from "./OrderStatus";
import ViewOrdersInfo from "./ViewOrdersInfo";

const OrderTableRow = ({ order, sl }: { order: TOrder; sl: number }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <tr className="text-center w-full" key={order._id}>
      <td className="">{sl}</td>
      <td className="">
        {(order.products[0].productId as unknown as TProduct).name} ...
      </td>
      <td className="flex  items-center text-center justify-center">
        {localPriceFormat(order?.totalPrice)}
      </td>

      <td>{capitalize(order.paymentStatus)}</td>
      <td>
        <OrderStatus orderStatus={order?.orderStatus as string} />
      </td>
      <td>
        <Moment format="DD MMM, YY">{order.createdAt}</Moment>
      </td>
      <td className="">
        <div className="flex flex-wrap gap-2 items-center justify-center min-h-[100%]">
          <Modal
            title={
              <span className="flex items-center gap-1">
                Order Details of
                <Moment format="DD MMM, YY">{order.createdAt}</Moment>
              </span>
            }
            centered
            height={"100%"}
            width={"80%"}
            footer={false}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
          >
            <ViewOrdersInfo order={order} />
          </Modal>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-blue-800  text-blue-600"
          >
            <BsEye size={24} />
          </button>

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
