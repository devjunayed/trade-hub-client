"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  setDeliveryMethod,
  updateTotal,
} from "@/redux/features/cart/cartSlice";
import {
  Card,
  Input,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@heroui/react";
import BreadCrumb from "../../(products)/products/components/BreadCrumb";
import { FaFirstOrder } from "react-icons/fa6";
import { createOrder } from "@/services/OrderService";
import { toast } from "react-toastify";
import { TOrder } from "@/types";
import { useRouter } from "next/navigation";

const CheckOutPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState<"manual" | "automatic">(
    "manual"
  );
  const [manualPaymentMethod, setManualPaymentMethod] = useState<
    "bkash" | "nagad"
  >();

  if (cart.products.length === 0 && router) {
    router.push("/");
  }

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart.deliveryMethod, dispatch]);

  const handleDeliveryChange = (method: "express" | "standard" | "pickup") => {
    dispatch(setDeliveryMethod(method));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    const finalData = { ...formValues, manualPaymentMethod, ...cart };

    if (formValues.paymentMethod === "automatic") {
      const checkoutResponse = await createOrder(
        finalData as unknown as TOrder
      );
      if (checkoutResponse.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("clearCartAfterRedirect", "true");
          window.location.replace(checkoutResponse.data.paymentURL);
        }
      }
    }

    if (formValues.paymentMethod === "manual") {
      if (
        !["bkash", "nagad"].includes(finalData?.manualPaymentMethod as string)
      ) {
        toast.error("Choose either Bkash or Nagad");
      }

      const checkoutResponse = await createOrder(
        finalData as unknown as TOrder
      );
      if (checkoutResponse.success) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("persist:root");
        }
        toast.success("Order is placed wait for review...");
        router.push("/")
      }
    }
  };

  return (
    <div className="px-6">
      <BreadCrumb activePath="checkout" labels={["Checkout"]} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checkout Form (Takes 2/3 Width) */}
        <div className="lg:col-span-2">
          <Card className="w-full p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                label="Full Name"
                placeholder="John Doe"
                required
              />
              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="john@example.com"
                required
              />
              <Input
                type="tel"
                name="phone"
                label="Phone Number"
                placeholder="+1234567890"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="City"
                  name="city"
                  placeholder="New York"
                  required
                />
                <Input
                  name="postalCode"
                  type="text"
                  label="Postal Code"
                  placeholder="10001"
                  required
                />
              </div>
              <Input
                name="shippingAddress"
                type="text"
                label="Shipping Address"
                placeholder="123 Street, City"
                required
              />

              {/* Payment Method Dropdown */}
              <div className="space-y-4">
                <Select
                  name="paymentMethod"
                  label="Payment Method"
                  defaultSelectedKeys={[paymentMethod]}
                  value={paymentMethod}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPaymentMethod(e.target.value as "manual" | "automatic");
                  }}
                >
                  <SelectItem key={"automatic"} value="automatic">
                    Automatic Payment
                  </SelectItem>
                  <SelectItem key={"manual"} value="manual">
                    Manual Payment
                  </SelectItem>
                </Select>

                {/* Manual Payment Options */}
                {paymentMethod === "manual" && (
                  <div className="space-y-4">
                    <RadioGroup
                      value={manualPaymentMethod || ""}
                      onChange={(e) =>
                        setManualPaymentMethod(
                          e.target.value as "bkash" | "nagad"
                        )
                      }
                    >
                      <Radio value="bkash">Bkash</Radio>
                      <Radio value="nagad">Nagad</Radio>
                    </RadioGroup>

                    {/* Bkash Expandable Content */}
                    {manualPaymentMethod === "bkash" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <h6 className="py-2 border-b-1 text-black ">
                            Please follow the instructions bellow :
                          </h6>
                          <p className="mt-2">
                            Send Money to <b>+8801814676613 </b>then,
                          </p>
                          <p>Please insert the details below.</p>
                        </div>
                        <Input
                          type="tel"
                          name="manualPaymentPhone"
                          label="Your Phone Number"
                          placeholder="+8801XXXXXXXXX"
                          required
                        />
                        <Input
                          name="transactionId"
                          type="text"
                          label="Transaction ID (TrxID)"
                          placeholder="Enter TrxID"
                          required
                        />
                        <Input
                          name="moneySent"
                          type="number"
                          label="Amount"
                          placeholder="Enter Amount"
                          required
                        />
                      </div>
                    )}

                    {/* Nagad Expandable Content */}
                    {manualPaymentMethod === "nagad" && (
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <h6 className="py-2 border-b-1 text-black ">
                            Please follow the instructions bellow :
                          </h6>
                          <p className="mt-2">
                            Send Money to <b>+8801814676613 </b>then,
                          </p>
                          <p>Please insert the details below.</p>
                        </div>
                        <Input
                          name="manualPaymentPhone"
                          type="tel"
                          label="Your Phone Number"
                          placeholder="+8801XXXXXXXXX"
                          required
                        />
                        <Input
                          name="transactionId"
                          type="text"
                          label="Transaction ID (TrxID)"
                          placeholder="Enter TrxID"
                          required
                        />
                        <Input
                          name="moneySent"
                          type="number"
                          label="Amount"
                          placeholder="Enter Amount"
                          required
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Divider />
              <div className="w-3/12 mx-auto text-center">
                <button
                  className="w-full hover:text-blue-400 hover:border-blue-400 border-1 flex items-center justify-center  gap-2 py-2  bg-none "
                  type="submit"
                >
                  <FaFirstOrder /> Confirm Order
                </button>
              </div>
            </form>
          </Card>
        </div>

        {/* Cart Summary (Takes 1/3 Width) */}
        <div className="lg:col-span-1">
          {cart.products.length > 0 ? (
            <Card className="w-full p-4 shadow-lg bg-white">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Order Summary
              </h3>

              {/* Cart Summary Table */}
              <Table aria-label="Cart Summary">
                <TableHeader>
                  <TableColumn>Product</TableColumn>
                  <TableColumn>Qty</TableColumn>
                  <TableColumn>Subtotal</TableColumn>
                </TableHeader>
                <TableBody>
                  {cart.products.map((product) => (
                    <TableRow key={product.productId}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell className="text-sm font-semibold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Divider className="my-4" />

              {/* Delivery Options */}
              <h4 className="text-lg font-semibold mb-2">Delivery Options:</h4>
              <RadioGroup
                value={cart.deliveryMethod}
                onChange={(e) =>
                  handleDeliveryChange(
                    e.target.value as "express" | "standard" | "pickup"
                  )
                }
              >
                <Radio value="express">
                  🚀 Express Delivery: $10.00 (1-2 Business Days)
                </Radio>
                <Radio value="standard">
                  📦 Standard Delivery: $5.00 (3-5 Business Days)
                </Radio>
                <Radio value="pickup">
                  🏠 Local Pickup: Free (Pickup from Store)
                </Radio>
              </RadioGroup>

              <Divider className="my-4" />

              {/* Total Amount */}
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>
                  ${(cart.totalPrice + cart.deliveryCharge).toFixed(2)}
                </span>
              </div>
            </Card>
          ) : (
            <p className="text-gray-500 text-lg text-center">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
