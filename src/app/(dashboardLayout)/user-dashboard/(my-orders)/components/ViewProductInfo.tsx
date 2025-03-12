"use cient";
import { capitalize } from "@/utils/capitalize";
import { localPriceFormat } from "@/utils/localPriceFormat";
import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import OrderStatus from "./OrderStatus";
import { AnyObject } from "antd/es/_util/type";

const ViewProductInfo = ({ order }: { order: AnyObject }) => {
  console.log(order);
  return (
    <div className="">
      <div className="my-4 flex justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Payment Method:</span>
          <span>{capitalize(order.paymentMethod)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Transaction ID:</span>
          <span>{capitalize(order.transactionId)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Payment Status:</span>
          <span className="bg-green-400 rounded block text-gray-600 px-2">
            {capitalize(order.paymentStatus)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Order Status:</span>
          <OrderStatus orderStatus={order.orderStatus as string} />
        </div>
      </div>
      <div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            <TableColumn>Image</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Subtotal</TableColumn>
          </TableHeader>
          <TableBody>
            <>
              {order?.products.map((item: AnyObject) => (
                <TableRow key={item?.productId as string}>
                  <TableCell>
                    <Image
                      className="w-12 h-12"
                      src={item?.productId?.productImages[0] as string}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>
                    <Link href={`/products/${item.productId._id}`}>
                      {item.productId.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {localPriceFormat(item.productId.price)}
                  </TableCell>
                  <TableCell>{item?.quantity}</TableCell>
                  <TableCell>
                    {localPriceFormat(item.productId.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                className="border-t-gray-200 border-t-1"
                key={"total amount"}
              >
                <TableCell>{""}</TableCell>
                <TableCell>{""}</TableCell>
                <TableCell>{""}</TableCell>
                <TableCell>{"Total"}</TableCell>
                <TableCell>{localPriceFormat(order.totalPrice)}</TableCell>
              </TableRow>
            </>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewProductInfo;
