/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Middleware } from "@reduxjs/toolkit";
import { clearCart } from "@/redux/features/cart/cartSlice";

const paymentMiddleware: Middleware = (store) => (next) => (action: any) => { 
 
    console.log(action.type);
    if (typeof window !== "undefined" && action.type !== clearCart.type) {
        if (localStorage.getItem("clearCartAfterRedirect")) {
            localStorage.removeItem("clearCartAfterRedirect");
            localStorage.removeItem("persist:root")
          store.dispatch(clearCart()); 
        }
      }

  return next(action);
};

export default paymentMiddleware;
