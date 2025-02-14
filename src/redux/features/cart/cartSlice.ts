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
  deliveryCost: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  deliveryMethod: "standard",
  deliveryCost: 5.00, // Default to Standard Delivery
};

// Function to calculate total (including delivery)
const calculateTotal = (items: CartItem[], deliveryCost: number) => {
  const itemsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return itemsTotal + deliveryCost;
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
      state.total = calculateTotal(state.items, state.deliveryCost);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      state.total = calculateTotal(state.items, state.deliveryCost);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.total = calculateTotal(state.items, state.deliveryCost);
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
      state.total = calculateTotal(state.items, state.deliveryCost);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.deliveryCost = 5.00; // Reset to default standard delivery
      state.deliveryMethod = "standard";
    },

    setDeliveryMethod: (state, action: PayloadAction<"express" | "standard" | "pickup">) => {
      state.deliveryMethod = action.payload;

      switch (action.payload) {
        case "express":
          state.deliveryCost = 10.00;
          break;
        case "standard":
          state.deliveryCost = 5.00;
          break;
        case "pickup":
          state.deliveryCost = 0.00;
          break;
      }
      
      state.total = calculateTotal(state.items, state.deliveryCost);
    },

    // ✅ Update total whenever needed
    updateTotal: (state) => {
      state.total = calculateTotal(state.items, state.deliveryCost);
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
  updateTotal // ✅ Now available!
} = cartSlice.actions;

export default cartSlice.reducer;
