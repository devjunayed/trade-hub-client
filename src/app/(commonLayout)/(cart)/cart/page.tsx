"use client";
import React from "react";
import BreadCrumb from "../../(products)/products/components/BreadCrumb";
import { useAppSelector } from "@/redux/hook";
import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { MdClose } from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mx-6 w-full">
      <BreadCrumb activePath="cart" labels={["cart"]} />

      <div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            <TableColumn>Image</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Subtotal</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {cart?.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image className="w-12 h-12" src={item.image} alt="" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  {" "}
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className=""
                    >
                      <BiPlus />
                    </Button>
                    {item.quantity}
                    <Button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                      className=""
                    >
                      <BiMinus />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{item.price * item.quantity}</TableCell>
                <TableCell>
                  <Button onClick={() => dispatch(removeFromCart(item.id))}>
                    <MdClose />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CartPage;
