"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { setDeliveryMethod, updateTotal } from "@/redux/features/cart/cartSlice";
import { Card, Input, Button, Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, RadioGroup, Radio, Select, SelectItem } from "@heroui/react";
import BreadCrumb from "../../(products)/products/components/BreadCrumb";

const CheckOutPage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState<"manual" | "automatic">("manual");
  const [manualPaymentMethod, setManualPaymentMethod] = useState<"bkash" | "nagad" | null>(null);

  useEffect(() => {
    dispatch(updateTotal()); 
  }, [cart.deliveryMethod, dispatch]);

  const handleDeliveryChange = (method: "express" | "standard" | "pickup") => {
    dispatch(setDeliveryMethod(method));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed with ${paymentMethod} payment method.`);
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
              <Input type="text" label="Full Name" placeholder="John Doe" required />
              <Input type="email" label="Email Address" placeholder="john@example.com" required />
              <Input type="tel" label="Phone Number" placeholder="+1234567890" required />
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" label="City" placeholder="New York" required />
                <Input type="text" label="Postal Code" placeholder="10001" required />
              </div>
              <Input type="text" label="Shipping Address" placeholder="123 Street, City" required />

              {/* Payment Method Dropdown */}
              <div className="space-y-4">
                <Select
                  label="Payment Method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as "manual" | "automatic")}
                >
                  <SelectItem value="automatic">Automatic Payment</SelectItem>
                  <SelectItem value="manual">Manual Payment</SelectItem>
                </Select>

                {/* Manual Payment Options */}
                {paymentMethod === "manual" && (
                  <div className="space-y-4">
                    <RadioGroup value={manualPaymentMethod || ""} onChange={(e) => setManualPaymentMethod(e.target.value as "bkash" | "nagad")}>
                      <Radio value="bkash">Bkash</Radio>
                      <Radio value="nagad">Nagad</Radio>
                    </RadioGroup>

                    {/* Bkash Expandable Content */}
                    {manualPaymentMethod === "bkash" && (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Please complete your payment via Bkash and provide the details below.
                        </p>
                        <Input type="tel" label="Your Phone Number" placeholder="+8801XXXXXXXXX" required />
                        <Input type="text" label="Transaction ID (TrxID)" placeholder="Enter TrxID" required />
                        <Input type="number" label="Amount" placeholder="Enter Amount" required />
                      </div>
                    )}

                    {/* Nagad Expandable Content */}
                    {manualPaymentMethod === "nagad" && (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Please complete your payment via Nagad and provide the details below.
                        </p>
                        <Input type="tel" label="Your Phone Number" placeholder="+8801XXXXXXXXX" required />
                        <Input type="text" label="Transaction ID (TrxID)" placeholder="Enter TrxID" required />
                        <Input type="number" label="Amount" placeholder="Enter Amount" required />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Divider />

              <Button color="primary" className="w-full py-3 text-lg font-medium" type="submit">
                Confirm Order
              </Button>
            </form>
          </Card>
        </div>

        {/* Cart Summary (Takes 1/3 Width) */}
        <div className="lg:col-span-1">
          {cart.items.length > 0 ? (
            <Card className="w-full p-4 shadow-lg bg-white">
              <h3 className="text-xl font-semibold mb-4 text-center">Order Summary</h3>

              {/* Cart Summary Table */}
              <Table aria-label="Cart Summary">
                <TableHeader>
                  <TableColumn>Product</TableColumn>
                  <TableColumn>Qty</TableColumn>
                  <TableColumn>Subtotal</TableColumn>
                </TableHeader>
                <TableBody>
                  {cart.items.map((item) => (
                    <TableRow key={item.productId}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Divider className="my-4" />

              {/* Delivery Options */}
              <h4 className="text-lg font-semibold mb-2">Delivery Options:</h4>
              <RadioGroup value={cart.deliveryMethod} onChange={(e) => handleDeliveryChange(e.target.value as string)}>
                <Radio value="express">🚀 Express Delivery: $10.00 (1-2 Business Days)</Radio>
                <Radio value="standard">📦 Standard Delivery: $5.00 (3-5 Business Days)</Radio>
                <Radio value="pickup">🏠 Local Pickup: Free (Pickup from Store)</Radio>
              </RadioGroup>

              <Divider className="my-4" />

              {/* Total Amount */}
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>

            </Card>
          ) : (
            <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;