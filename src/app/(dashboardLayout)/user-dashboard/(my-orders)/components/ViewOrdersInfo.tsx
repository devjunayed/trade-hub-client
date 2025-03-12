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

const ViewOrdersInfo = ({ order }: { order: AnyObject }) => {
  return (
    <div className="overflow-y-scroll">
      <div className="my-4">
        <Table hideHeader>
          <TableHeader>
            <TableColumn>{""}</TableColumn>
            <TableColumn>{""}</TableColumn>
            <TableColumn>{""}</TableColumn>
            <TableColumn>{""}</TableColumn>
            <TableColumn>{""}</TableColumn>
            <TableColumn>{""}</TableColumn>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">Payment Method :</TableCell>
              <TableCell>{capitalize(order.paymentMethod)}</TableCell>
              <TableCell className="font-semibold">Transaction ID :</TableCell>
              <TableCell>{order.transactionId}</TableCell>
              <TableCell className="font-semibold">Payment Status :</TableCell>
              <TableCell>
                {" "}
                <span className="bg-green-400 rounded block text-center text-gray-600 px-2">
                  {capitalize(order.paymentStatus)}
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Order Status :</TableCell>
              <TableCell> <OrderStatus orderStatus={order.orderStatus as string} /></TableCell>
              <TableCell className="font-semibold">
                Delivery Charge :
              </TableCell>
              <TableCell>{order.deliveryCharge}</TableCell>
              <TableCell className="font-semibold">Delivery Method :</TableCell>
              <TableCell>{capitalize(order.deliveryMethod)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
  
      <div>
        <h1 className="text-lg font-semibold">Billing Information</h1>
        <div className="my-4">
          <Table hideHeader>
            <TableHeader>
              <TableColumn>{""}</TableColumn>
              <TableColumn>{""}</TableColumn>
              <TableColumn>{""}</TableColumn>
              <TableColumn>{""}</TableColumn>
              <TableColumn>{""}</TableColumn>
              <TableColumn>{""}</TableColumn>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Name :</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell className="font-semibold">Email :</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell className="font-semibold">Phone :</TableCell>
                <TableCell>{order.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">City :</TableCell>
                <TableCell>{order.city}</TableCell>
                <TableCell className="font-semibold">
                  Shipping Address :
                </TableCell>
                <TableCell>{order.shippingAddress}</TableCell>
                <TableCell className="font-semibold">Postal Code :</TableCell>
                <TableCell>{order.postalCode}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
      <h1 className="text-lg font-semibold">Products Information</h1>
        <div className="my-4">
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
    </div>
  );
};

export default ViewOrdersInfo;
