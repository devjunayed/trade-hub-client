/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";
import { clearCart } from "@/redux/features/cart/cartSlice";

const paymentMiddleware: Middleware = (store) => (next) => (action: any) => { 
 
    console.log(action.type);
    if (action.type !== clearCart.type) {
        console.log("fuck you 2000")
        if (localStorage.getItem("clearCartAfterRedirect") === "true") {
            localStorage.removeItem("clearCartAfterRedirect");
            localStorage.removeItem("persist:root")
          store.dispatch(clearCart()); 
        }
      }

  return next(action);
};

export default paymentMiddleware;
