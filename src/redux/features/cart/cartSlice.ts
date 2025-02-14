import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  deliveryMethod: "express" | "standard" | "pickup";
  deliveryCharge: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  deliveryMethod: "standard",
  deliveryCharge: 5.00, 
};


const calculateTotal = (items: CartItem[]) => {
  const itemsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return itemsTotal;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload });
      }
      state.total = calculateTotal(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      state.total = calculateTotal(state.items);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.total = calculateTotal(state.items);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.productId === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((cartItem) => cartItem.productId !== action.payload);
        }
      }
      state.total = calculateTotal(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
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
      
      state.total = calculateTotal(state.items);
    },

   
    updateTotal: (state) => {
      state.total = calculateTotal(state.items);
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
