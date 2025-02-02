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
import { useCreateOrder } from "@/hooks/order.hook";

const CartPage = () => {
  const [products, setProducts] = useState<TProduct[]>();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {mutate: handleOrder} = useCreateOrder();

  useEffect(() => {
    setIsLoading(true);
    const handleGetProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };
    handleGetProducts();
    setIsLoading(false);
  }, []);

  const handleCheckout  = () => {
    handleOrder(cart.items);
  }

  return (
    <div className="px-6 w-full">
      <BreadCrumb activePath="cart" labels={["cart"]} />

      <div>
        {cart.items.length > 0 && (
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
                      <Button danger onClick={() => dispatch(removeFromCart(item.id))}>
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
                  <TableCell>{cart.total}</TableCell>
                  <TableCell>
                    <Button danger onClick={() => dispatch(clearCart())}>
                      Clear all
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            </TableBody>
          </Table>
          <div className="mt-10 text-center">
            <Button   size="large" variant="filled" onClick={handleCheckout}><BiPackage /> Checkout</Button>
          </div>
            </div>
        )}
        {cart.items.length === 0 && (
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
