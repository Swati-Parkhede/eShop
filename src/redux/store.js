import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer, // This line was commented out previously
  },
});

export default store;