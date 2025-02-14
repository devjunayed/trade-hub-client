import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  products: CartItem[];
  totalPrice: number;
  deliveryMethod: "express" | "standard" | "pickup";
  deliveryCharge: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  deliveryMethod: "standard",
  deliveryCharge: 5.00, 
};


const calculateTotal = (products: CartItem[]) => {
  const productsTotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return productsTotal;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.products.find((item) => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.products.push({ ...action.payload });
      }
      state.totalPrice = calculateTotal(state.products);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item.productId !== action.payload);
      state.totalPrice = calculateTotal(state.products);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = calculateTotal(state.products);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.productId === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.products = state.products.filter((cartItem) => cartItem.productId !== action.payload);
        }
      }
      state.totalPrice = calculateTotal(state.products);
    },

    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.deliveryCharge = 5.00; 
      state.deliveryMethod = "standard";
    },

    setDeliveryMethod: (state, action: PayloadAction<"express" | "standard" | "pickup">) => {
      state.deliveryMethod = action.payload;

      switch (action.payload) {
        case "express":
          state.deliveryCharge = 10.00;
          break;
        case "standard":
          state.deliveryCharge = 5.00;
          break;
        case "pickup":
          state.deliveryCharge = 0.00;
          break;
      }
      
      state.totalPrice = calculateTotal(state.products);
    },

   
    updateTotal: (state) => {
      state.totalPrice = calculateTotal(state.products);
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart, 
  setDeliveryMethod,
  updateTotal 
} = cartSlice.actions;

export default cartSlice.reducer;
