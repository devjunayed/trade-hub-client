"use client";
import React, { useEffect, useState } from "react";
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
import { BiMinus, BiPackage, BiPlus } from "react-icons/bi";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import NewArrival from "../../components/NewArrival/NewArrival";

import { TProduct } from "@/types";
import { getProducts } from "@/actions/getProducts";
import Link from "next/link";

const CartPage = () => {
  const [products, setProducts] = useState<TProduct[]>();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handleGetProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };
    handleGetProducts();
    setIsLoading(false);
  }, []);

  return (
    <div className="px-6 w-full">
      <BreadCrumb activePath="cart" labels={["cart"]} />

      <div>
        {cart?.products.length > 0 && (
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
                <>
                  {cart?.products.map((item) => (
                    <TableRow key={item?.productId}>
                      <TableCell>
                        <Image className="w-12 h-12" src={item?.image} alt="" />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        {" "}
                        <div className="flex items-center gap-4">
                          <Button
                            onClick={() =>
                              dispatch(increaseQuantity(item.productId))
                            }
                            className=""
                          >
                            <BiPlus />
                          </Button>
                          {item?.quantity}
                          <Button
                            onClick={() =>
                              dispatch(decreaseQuantity(item.productId))
                            }
                            disabled={item?.quantity === 1}
                            className=""
                          >
                            <BiMinus />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{item.price * item.quantity}</TableCell>
                      <TableCell>
                        <Button
                          danger
                          onClick={() =>
                            dispatch(removeFromCart(item.productId))
                          }
                        >
                          <MdClose />
                        </Button>
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
                    <TableCell>{cart.totalPrice}</TableCell>
                    <TableCell>
                      <Button danger onClick={() => dispatch(clearCart())}>
                        Clear all
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              </TableBody>
            </Table>
            <div className="my-10 w-full">
              <Link href="/checkout" className="py-2 mx-auto md:w-[150px] rounded-lg bg-none hover:bg-none hover:text-blue-400 hover:border-blue-400 w-full flex items-center justify-center gap-2 border">
                <BiPackage /> Checkout
              </Link>
            </div>
          </div>
        )}
        {cart.products.length === 0 && (
          <div className="flex items-center justify-center mb-6 w-full min-h-[40vh] ">
            Cart is empty
          </div>
        )}
      </div>
      {!isLoading && products && (
        <NewArrival key={"product"} products={products} />
      )}
    </div>
  );
};

export default CartPage;
