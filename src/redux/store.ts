import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import paymentMiddleware from "./middleware/paymentMiddleware";

const persistConfig = {
  key: "root", 
  storage,     
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(paymentMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
